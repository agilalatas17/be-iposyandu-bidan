module.exports = (usiaKehamilan) => {
  if (usiaKehamilan <= 12) {
    return 1;
  } else if (usiaKehamilan >= 13 && usiaKehamilan <= 27) {
    return 2;
  } else if (usiaKehamilan >= 28 && usiaKehamilan <= 40) {
    return 3;
  }
};
