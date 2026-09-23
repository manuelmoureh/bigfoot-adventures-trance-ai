const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

const src = "D:\\Business\\Trance AI\\Projects\\Bigfoot Adventures\\Assets\\Web";
const dest = path.join(__dirname, "..", "public", "images");

const files = [
  { src: "TPL_1089.jpg", out: "fleet-prado-street.webp" },
  { src: "TPL_1441.jpg", out: "fleet-cruiser-street.webp" },
  { src: "TPL_1229-Edit.jpg", out: "fleet-coaster-street.webp" },
];

(async () => {
  for (const { src: f, out: outName } of files) {
    const out = path.join(dest, outName);
    const meta = await sharp(path.join(src, f)).metadata();
    await sharp(path.join(src, f))
      .rotate()
      .resize({ width: 1400, withoutEnlargement: true })
      .webp({ quality: 82 })
      .toFile(out);
    const outSize = fs.statSync(out).size;
    console.log(f, "->", out, meta.width + "x" + meta.height, "outBytes:", outSize);
  }
})();
