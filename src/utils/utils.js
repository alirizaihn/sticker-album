const Utils = {
  convertMonthTime(month) {
    const workYear = parseInt(month / 12);
    return workYear < 1
      ? `${month} Ay`
      : workYear > 3
      ? `3+ Yıl`
      : `${workYear} Yıl`;
  },
  getRandomPhotos(photos) {
    const shuffled = [...photos].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 18);
  },
};

export default Utils;
