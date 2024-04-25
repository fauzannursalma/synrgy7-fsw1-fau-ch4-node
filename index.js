const { volumeKubus, luasPermukaanKubus } = require("./kubus.js");
const { volumeBalok, luasPermukaanBalok } = require("./balok.js");
const {
  volumePrismaSegitiga,
  luasPermukaanPrismaSegitiga,
} = require("./prisma.js");

// ==================================================
// Kubus
// ==================================================
console.log("===== Kubus =====");
console.log("Volume Kubus: ", volumeKubus(4));
console.log("Luas Permukaan Kubus: ", luasPermukaanKubus(4));
console.log();

// ==================================================
// Balok
// ==================================================
console.log("===== Balok =====");
console.log("Volume Balok: ", volumeBalok(4, 5, 6));
console.log("Luas Permukaan Balok: ", luasPermukaanBalok(4, 5, 6));
console.log();

// ==================================================
// Prisma Segitiga
// ==================================================
console.log("===== Prisma Segitiga =====");
console.log("Volume Prisma Segitiga: ", volumePrismaSegitiga(4, 5, 6));
console.log(
  "Luas Permukaan Prisma Segitiga: ",
  luasPermukaanPrismaSegitiga(4, 5, 6)
);
console.log();
// ==================================================
