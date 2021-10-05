/**
 * @copyright https://leetcode.com/problems/sorting-the-sentence/
 *
 */
const sortSentence = (sentence) => {
  let array = sentence.split(" ");
  let target = Array(array.length);
  array.forEach((alphnumeric) => {
    let { word, position } = alphnumeric.match(
      /(?<word>[a-z]+)(?<position>\d+)/i
    ).groups;
    target[parseInt(position - 1)] = word;
  });
  array = null;
  return target.join(" ");
};
export default sortSentence;
