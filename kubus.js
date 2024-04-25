// Module rumus kubus (volume dan luas permukaan)
// ==================================================
// rumus volume kubus = s × s × s
const volumeKubus = (sisi) => {
  return sisi * sisi * sisi;
};
// rumus luas permukaan kubus
const luasPermukaanKubus = (sisi) => {
  return 6 * sisi * sisi;
};

// export module
module.exports = { volumeKubus, luasPermukaanKubus };
