import { output, processImage, resize } from "@thi.ng/imago"

const SRC = "public/avatars/edward.jpeg"
const OUT_DIR = "public/avatars"
const OUT_NAME = "edward-pixelated"

const SMALL = 16
const BLOCK_SIZE = 16
const FINAL = SMALL * BLOCK_SIZE

await processImage(
  SRC,
  [
    resize({ size: [SMALL, SMALL] }),
    resize({ size: [FINAL, FINAL], filter: "nearest" }),
    output({ id: "pixelated", path: `${OUT_NAME}.png` })
  ],
  { outDir: OUT_DIR }
)

console.log(
  `Pixelated edward.jpeg → ${FINAL}×${FINAL} (${SMALL}×${SMALL} blocks)`
)
