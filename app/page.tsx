import { Converter } from "@/components/converter";

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 .7A11.5 11.5 0 0 0 8.36 23.1c.58.1.79-.25.79-.56v-2.23c-3.22.7-3.9-1.37-3.9-1.37-.52-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.2 1.77 1.2 1.03 1.78 2.71 1.27 3.37.97.1-.75.4-1.27.74-1.56-2.57-.29-5.27-1.29-5.27-5.75 0-1.27.45-2.31 1.19-3.12-.12-.3-.52-1.48.11-3.08 0 0 .97-.31 3.16 1.19A10.93 10.93 0 0 1 12 6c.98 0 1.95.13 2.87.39 2.19-1.5 3.15-1.19 3.15-1.19.64 1.6.24 2.78.12 3.08.74.81 1.19 1.85 1.19 3.12 0 4.47-2.71 5.45-5.29 5.74.42.36.79 1.08.79 2.18v3.23c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .7Z"/></svg>
);

export default function Home() {
  return (
    <main>
      <nav className="nav shell" aria-label="Primary navigation">
        <a className="brand" href="https://crestconvert.com" aria-label="Crest Convert home">
          <span className="brand-mark">C</span><span>Crest Convert</span>
        </a>
        <div className="nav-links">
          <a href="https://www.npmjs.com/package/crestconvert">npm package</a>
          <a className="github-link" href="https://github.com/Crest-Convert/heic-to-jpg-nextjs-starter"><GitHubIcon />GitHub</a>
        </div>
      </nav>

      <section className="hero shell">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Next.js starter</p>
          <h1>Turn iPhone photos into JPGs. <em>Privately.</em></h1>
          <p className="lede">A production-ready example powered by the <code>crestconvert</code> npm package. Every conversion happens in your browser.</p>
          <div className="trust-row" aria-label="Product benefits">
            <span>No uploads</span><span>No API keys</span><span>No tracking</span>
          </div>
        </div>
        <div className="converter-wrap"><Converter /></div>
      </section>

      <section className="how shell">
        <p className="section-label">How it works</p>
        <div className="steps">
          <article><span>01</span><h2>Choose photos</h2><p>Select up to 50 HEIC or HEIF files from your device.</p></article>
          <article><span>02</span><h2>Convert locally</h2><p>WebAssembly decodes every image without sending it anywhere.</p></article>
          <article><span>03</span><h2>Download</h2><p>Get one JPG immediately or a tidy ZIP for batches.</p></article>
        </div>
      </section>

      <section className="code-section shell">
        <div>
          <p className="section-label">Use it in your app</p>
          <h2>Seven lines from HEIC to JPG</h2>
          <p>The UI above is a real implementation, not a mock-up. Fork it or install the same package in any browser project.</p>
          <div className="actions"><a className="button" href="https://github.com/Crest-Convert/heic-to-jpg-nextjs-starter">View source</a><a className="text-link" href="https://crestconvert.com">More file converters →</a></div>
        </div>
        <pre aria-label="JavaScript example"><code><span className="muted">import</span> {'{'} convertImage, download {'}'} <span className="muted">from</span> <span className="green">&quot;crestconvert&quot;</span>;

<span className="muted">const</span> result = <span className="muted">await</span> convertImage(file, {'{'}
  format: <span className="green">&quot;jpg&quot;</span>,
  quality: <span className="number">0.9</span>
{'}'});

download(result.blob, result.filename);</code></pre>
      </section>

      <footer className="shell"><span>Built with <a href="https://www.npmjs.com/package/crestconvert">crestconvert</a></span><span>Files never leave your device.</span></footer>
    </main>
  );
}
