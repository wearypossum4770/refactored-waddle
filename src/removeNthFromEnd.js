function removeNthFromEnd(head, n) {
  let target = [];
  head.reverse().map((num, index) => {
    if (index !== n - 1) {
      target.push(num);
    }
  });
  return target.reverse();
}
console.log(removeNthFromEnd([1, 2, 3, 4, 5], 2));
