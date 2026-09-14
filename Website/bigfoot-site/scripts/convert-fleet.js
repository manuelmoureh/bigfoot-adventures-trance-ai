const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

const src = "D:\\Business\\Trance AI\\Projects\\Bigfoot Adventures\\Assets\\eComm Photos";
const dest = path.join(__dirname, "..", "public", "images", "fleet");
fs.mkdirSync(dest, { recursive: true });

const files = [
  { src: "alphard_clean_backup.png", out: "alphard.png" },
  { src: "coaster_clean.png", out: "coaster.png" },
  { src: "landcruiser_clean.png", out: "landcruiser.png" },
  { src: "prado_clean.png", out: "prado.png" },
];

(async () => {
  for (const { src: f, out: outName } of files) {
    const out = path.join(dest, outName);
    const meta = await sharp(path.join(src, f)).metadata();
    const { data } = await sharp(path.join(src, f)).raw().ensureAlpha().toBuffer({ resolveWithObject: true });
    const corner = [data[0], data[1], data[2], data[3]];
    await sharp(path.join(src, f))
      .resize({ width: 2100, withoutEnlargement: true })
      .png({ compressionLevel: 9 })
      .toFile(out);
    console.log(f, "->", out, meta.width + "x" + meta.height, "hasAlpha:", meta.hasAlpha, "corner:", corner);
  }
})();
