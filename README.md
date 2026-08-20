# HEIC to JPG Next.js Starter

A polished, private HEIC-to-JPG converter built with Next.js and the [`crestconvert`](https://www.npmjs.com/package/crestconvert) npm package.

**[Try the live demo](https://heic-to-jpg-three.vercel.app/)**

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Crest-Convert/heic-to-jpg-nextjs-starter)

## Features

- HEIC and HEIF to JPG conversion
- Up to 50 images per batch
- A single ZIP download for batches
- Adjustable JPG quality
- Entirely local browser processing
- No uploads, API keys, accounts or tracking
- Responsive, accessible interface

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Core usage

```ts
import { convertImage, download } from "crestconvert";

const result = await convertImage(file, {
  format: "jpg",
  quality: 0.9
});

download(result.blob, result.filename);
```

## Deploy

Deploy it to Vercel with the button above, or use any platform that supports Next.js.

## Privacy

Selected files are processed locally with Canvas, WebAssembly and `crestconvert`. The starter has no backend conversion endpoint and sends no file data to Crest Convert or another service.

## License

MIT
