const countingValleys = (step, path) => {
  let count = 0;
  let valleys = 0;
  for (let i = 0; i < path.length; i++) {
    if (path[i] === "u" || path[i] === "U") {
      count -= 1;
      if (count === 0 && i > 0 && i < path.length) {
        valleys += 1;
      }
    } else {
      count += 1;
    }
  }
  return valleys;
};

// console.log(countingValleys(8, ['D','D', 'U','U', 'U', 'U', 'D', 'D']))
console.log(countingValleys(8, ["U", "D", "D", "D", "U", "D", "U", "U"]));
console.log(12, "DDUUDDUDUUUD");
10, "DDUUDDUDUUUD";
10, "DUDDDUUDUU";
10, "DDUDDUUDUU";
10, "UDDDUDUDUU";
