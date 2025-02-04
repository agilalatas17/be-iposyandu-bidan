module.exports = (hpht, tanggalDaftar) => {
  const hphtDate = new Date(hpht);
  const daftarDate = new Date(tanggalDaftar);

  const selisihMilidetik = daftarDate - hphtDate;

  // Konversi ke minggu
  // 1 minggu = 7 * 24 * 60 * 60 * 1000 milidetik
  const usiaKehamilan = Math.floor(
    selisihMilidetik / (7 * 24 * 60 * 60 * 1000)
  );

  return usiaKehamilan;
};
