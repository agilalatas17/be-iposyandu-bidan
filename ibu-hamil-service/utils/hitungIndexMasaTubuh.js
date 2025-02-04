module.exports = (beratBadan, tinggiBadan) => {
  // mengubah cm ke m
  let konversiTB = tinggiBadan / 100;
  let imt = beratBadan / (konversiTB * konversiTB);

  if (imt <= 18.5) {
    return 'Kurus';
  } else if (imt > 18.5 && imt <= 24.9) {
    return 'Normal';
  } else if (imt >= 25 && imt <= 29) {
    return 'Gemuk';
  } else if (imt > 30) {
    return 'Obesitas';
  } else {
    return '-';
  }
};
