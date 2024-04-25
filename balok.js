// Module rumus balok (volume dan luas permukaan)
// ==================================================
// rumus volume balok = p × l × t
const rumusVolumeBalok = (panjang, lebar, tinggi) => {
  return panjang * lebar * tinggi;
};
// rumus luas permukaan balok = 2 × (p × l + p × t + l × t)
const rumusLuasPermukaanBalok = (panjang, lebar, tinggi) => {
  return 2 * (panjang * lebar + panjang * tinggi + lebar * tinggi);
};

// export module
module.exports = { rumusVolumeBalok, rumusLuasPermukaanBalok };
