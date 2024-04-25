// =================================================================
// Rumus Balok, Kubus, dan Prisma Segitiga
// =================================================================
const { rumusVolumeKubus, rumusLuasPermukaanKubus } = require("./kubus.js");
const { rumusVolumeBalok, rumusLuasPermukaanBalok } = require("./balok.js");
const {
  rumusVolumePrismaSegitiga,
  rumusLuasPermukaanPrismaSegitiga,
} = require("./prisma.js");
const fs = require("fs");

// Kubus
console.log("===== Kubus =====");
const volumeKubus = rumusVolumeKubus(4);
const luasPermukaanKubus = rumusLuasPermukaanKubus(4);
console.log("Volume Kubus: ", volumeKubus);
console.log("Luas Permukaan Kubus: ", luasPermukaanKubus);
console.log();

// Balok
console.log("===== Balok =====");
const volumeBalok = rumusVolumeBalok(4, 5, 6);
const luasPermukaanBalok = rumusLuasPermukaanBalok(4, 5, 6);
console.log("Volume Balok: ", volumeBalok);
console.log("Luas Permukaan Balok: ", luasPermukaanBalok);
console.log();

// Prisma Segitiga
console.log("===== Prisma Segitiga =====");
const volumePrismaSegitiga = rumusVolumePrismaSegitiga(4, 5, 6);
const luasPermukaanPrismaSegitiga = rumusLuasPermukaanPrismaSegitiga(4, 5, 6);
console.log("Volume Prisma Segitiga: ", volumePrismaSegitiga);
console.log("Luas Permukaan Prisma Segitiga: ", luasPermukaanPrismaSegitiga);
console.log();

// Save on result.txt
// ==================================================
const result = fs.readFileSync("./result.txt", "utf-8");
fs.writeFile(
  "./result.txt",
  `Volume Kubus: ${volumeKubus}
Luas Permukaan Kubus: ${luasPermukaanKubus}
Volume Balok: ${volumeBalok}   
Luas Permukaan Balok: ${luasPermukaanBalok}
Volume Prisma Segitiga: ${volumePrismaSegitiga}
Luas Permukaan Prisma Segitiga: ${luasPermukaanPrismaSegitiga}`,
  (err) => {
    if (err) {
      console.log(err);
    }
  }
);

console.log("Data has been saved on result.txt");
console.log();
