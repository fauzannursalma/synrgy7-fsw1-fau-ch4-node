// Module rumus kubus (volume dan luas permukaan)
// ==================================================
// rumus volume kubus = s × s × s
const rumusVolumeKubus = (sisi) => {
  return sisi * sisi * sisi;
};
// rumus luas permukaan kubus
const rumusLuasPermukaanKubus = (sisi) => {
  return 6 * sisi * sisi;
};

// export module
module.exports = { rumusVolumeKubus, rumusLuasPermukaanKubus };
