// Module rumus prisma segitiga (volume dan luas permukaan)
// ==================================================
// rumus volume prisma segitiga = 1/2 × a × ta × tp
const volumePrismaSegitiga = (alas, tinggiAlas, tinggiPrisma) => {
  return 0.5 * alas * tinggiAlas * tinggiPrisma;
};
// rumus luas permukaan prisma segitiga = 2 × (1/2 × a × ta + a × tp + ta × tp)
const luasPermukaanPrismaSegitiga = (alas, tinggiAlas, tinggiPrisma) => {
  return (
    2 *
    (0.5 * alas * tinggiAlas + alas * tinggiPrisma + tinggiAlas * tinggiPrisma)
  );
};

// export module
module.exports = { volumePrismaSegitiga, luasPermukaanPrismaSegitiga };
