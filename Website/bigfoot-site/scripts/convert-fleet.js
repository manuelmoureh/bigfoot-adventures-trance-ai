const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

const src = "D:\\Business\\Trance AI\\Projects\\Bigfoot Adventures\\Assets\\eComm Photos";
const dest = path.join(__dirname, "..", "public", "images", "fleet");
fs.mkdirSync(dest, { recursive: true });

const files = [
  "alphard_transparent.png",
  "coaster_transparent.png",
  "landcruiser_transparent.png",
  "prado_transparent.png",
];

(async () => {
  for (const f of files) {
    const out = path.join(dest, f.replace("_transparent.png", ".png"));
    const meta = await sharp(path.join(src, f)).metadata();
    await sharp(path.join(src, f))
      .resize({ width: 2100, withoutEnlargement: true })
      .png({ compressionLevel: 9 })
      .toFile(out);
    console.log(f, "->", out, meta.width + "x" + meta.height);
  }
})();
