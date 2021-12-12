export default function mySqrt(x) {
  let array = [];
  for (let index = 0; index < x; index++) {
    array.push(index);
  }
  for (let index = 0; index < array.length; index++) {
    if (x < array[index] * array[index]) {
      return index - 1;
    }
  }
}

console.log(mySqrt(4));
console.log(mySqrt(8));
