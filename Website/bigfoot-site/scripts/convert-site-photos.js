const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

const webDir = "D:\\Business\\Trance AI\\Projects\\Bigfoot Adventures\\Assets\\Web";
const carDir = "D:\\Business\\Trance AI\\Projects\\Bigfoot Adventures\\Assets\\Car Photos";
const dest = path.join(__dirname, "..", "public", "images");

const files = [
  { dir: webDir, src: "TPL_1089.jpg", out: "fleet-prado-street.webp" },
  { dir: webDir, src: "TPL_1441.jpg", out: "fleet-cruiser-street.webp" },
  { dir: webDir, src: "TPL_1229-Edit.jpg", out: "fleet-coaster-street.webp" },
  { dir: webDir, src: "TPL_1366.jpg", out: "fleet-alphard-street.webp" },
  { dir: carDir, src: "TPL_1586-Edit.jpg", out: "fleet-hiace-street.webp" },
];

(async () => {
  for (const { dir, src: f, out: outName } of files) {
    const inPath = path.join(dir, f);
    const out = path.join(dest, outName);
    const meta = await sharp(inPath).metadata();
    await sharp(inPath)
      .rotate()
      .resize({ width: 1400, withoutEnlargement: true })
      .webp({ quality: 82 })
      .toFile(out);
    const outSize = fs.statSync(out).size;
    console.log(f, "->", out, meta.width + "x" + meta.height, "outBytes:", outSize);
  }
})();
