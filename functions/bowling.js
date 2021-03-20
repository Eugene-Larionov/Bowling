export const bowlingScore = rolls => {
  let f = 1; // Frame idx
  return rolls.reduce((p, c, i, a) => {
    if (f >= 10) return p + c; // Bonus rolls
    if (c === 10) {
      // Strike
      f++;
      return p + c + a[i + 1] + a[i + 2];
    }
    if (f % 1 !== 0) {
      // Second Roll of a Frame
      f = Math.floor(++f);
      if (c + a[i - 1] === 10) return p + c + a[i + 1]; // Spare
      return p + c; // Not a spare
    }
    f += 0.5; // First Roll of a Frame
    return p + c;
  }, 0);
};
