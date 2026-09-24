const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

const carDir = "D:\\Business\\Trance AI\\Projects\\Bigfoot Adventures\\Assets\\Car Photos";
const assetsDir = "D:\\Business\\Trance AI\\Projects\\Bigfoot Adventures\\Assets";
const dest = path.join(__dirname, "..", "public", "images", "gallery");
fs.mkdirSync(dest, { recursive: true });

// id = output base name (must match app/galleryData.ts)
const files = [
  { dir: assetsDir, src: "TRA_9413.jpg", id: "elephant-amboseli" },
  { dir: carDir, src: "TPL_0872.jpg", id: "landcruiser-street" },
  { dir: carDir, src: "TPL_1651.jpg", id: "guide-binoculars" },
  { dir: carDir, src: "TPL_1000.jpg", id: "open-viewer-side" },
  { dir: carDir, src: "TPL_1511.jpg", id: "fleet-lineup" },
  { dir: carDir, src: "TPL_1362.jpg", id: "alphard-front" },
  { dir: carDir, src: "TPL_1723-Edit.jpg", id: "nairobi-np-gate" },
  { dir: carDir, src: "TPL_1336.jpg", id: "interior-seats" },
  { dir: carDir, src: "TPL_1127.jpg", id: "prado-front" },
  { dir: carDir, src: "TPL_0980.jpg", id: "guide-landcruiser-door" },
  { dir: carDir, src: "TPL_1577-Edit.jpg", id: "hiace-front" },
  { dir: carDir, src: "TPL_1309-Edit.jpg", id: "coaster-rear" },
  { dir: carDir, src: "TPL_1705.jpg", id: "guide-open-vehicle" },
  { dir: carDir, src: "TPL_1428-Edit.jpg", id: "landcruiser-front" },
  { dir: carDir, src: "TPL_1066.jpg", id: "open-viewer-rear" },
  { dir: carDir, src: "TPL_0929.jpg", id: "guide-beside-landcruiser" },
];

(async () => {
  let total = 0;
  for (const { dir, src, id } of files) {
    const inPath = path.join(dir, src);
    for (const [suffix, width, quality] of [["lg", 1800, 80], ["sm", 720, 76]]) {
      const out = path.join(dest, `${id}-${suffix}.webp`);
      await sharp(inPath).rotate().resize({ width, withoutEnlargement: true }).webp({ quality }).toFile(out);
      total += fs.statSync(out).size;
    }
    console.log(id, "ok");
  }
  console.log("total KB:", Math.round(total / 1024));
})();
