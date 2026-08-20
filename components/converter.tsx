"use client";

import { useRef, useState } from "react";

type State = "idle" | "ready" | "working" | "success" | "error";
const HEIC_FILENAME = /\.(heic|heif)$/i;

export function Converter() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [files, setFiles] = useState<File[]>([]);
  const [quality, setQuality] = useState(90);
  const [state, setState] = useState<State>("idle");
  const [message, setMessage] = useState("Your files never leave this browser.");
  const [dragging, setDragging] = useState(false);

  function addFiles(selected: FileList | File[]) {
    const accepted = Array.from(selected).filter((file) => HEIC_FILENAME.test(file.name)).slice(0, 50);
    setFiles(accepted);
    if (accepted.length) {
      setState("ready");
      setMessage(`${accepted.length} ${accepted.length === 1 ? "photo" : "photos"} ready to convert.`);
    } else {
      setState("error");
      setMessage("Choose a HEIC or HEIF image.");
    }
  }

  async function runConversion() {
    if (!files.length || state === "working") return;
    setState("working");
    try {
      const { convertImages, createZip, download } = await import("crestconvert");
      const converted = await convertImages(files, {
        format: "jpg",
        quality: quality / 100,
        onProgress(completed, total, filename) {
          setMessage(`Converting ${completed} of ${total}: ${filename}`);
        }
      });
      if (converted.length === 1) download(converted[0].blob, converted[0].filename);
      else download(await createZip(converted), "converted-jpgs.zip");
      setState("success");
      setMessage(`${converted.length} ${converted.length === 1 ? "photo" : "photos"} converted successfully.`);
    } catch (error) {
      setState("error");
      setMessage(error instanceof Error ? error.message : "Conversion failed.");
    }
  }

  return (
    <section className="converter-card" aria-labelledby="converter-title">
      <div className="card-topline"><div><span className="status-dot" />Local processing</div><span>HEIC → JPG</span></div>
      <div className="card-heading"><h2 id="converter-title">Convert your photos</h2><p>Drop iPhone images below. Up to 50 at once.</p></div>
      <div
        className={`dropzone${dragging ? " dragging" : ""}`}
        role="button"
        tabIndex={0}
        onKeyDown={(event) => { if (event.key === "Enter" || event.key === " ") inputRef.current?.click(); }}
        onDragEnter={(event) => { event.preventDefault(); setDragging(true); }}
        onDragOver={(event) => event.preventDefault()}
        onDragLeave={() => setDragging(false)}
        onDrop={(event) => { event.preventDefault(); setDragging(false); addFiles(event.dataTransfer.files); }}
        onClick={() => inputRef.current?.click()}
      >
        <input ref={inputRef} type="file" accept=".heic,.heif,image/heic,image/heif" multiple onChange={(event) => event.target.files && addFiles(event.target.files)} />
        <span className="upload-icon" aria-hidden="true">↑</span>
        <strong>{files.length ? `${files.length} ${files.length === 1 ? "photo selected" : "photos selected"}` : "Drop HEIC files here"}</strong>
        <span>{files.length ? files.map((file) => file.name).slice(0, 2).join(", ") : "or click to browse"}</span>
      </div>
      <div className="quality-row"><label htmlFor="quality">JPG quality</label><strong>{quality}%</strong></div>
      <input id="quality" className="quality" type="range" min="50" max="100" value={quality} onChange={(event) => setQuality(Number(event.target.value))} />
      <button className="convert-button" type="button" disabled={!files.length || state === "working"} onClick={runConversion}>{state === "working" ? "Converting…" : files.length > 1 ? "Convert and download ZIP" : "Convert to JPG"}<span aria-hidden="true">→</span></button>
      <p className={`message ${state}`} role="status" aria-live="polite">{message}</p>
    </section>
  );
}
