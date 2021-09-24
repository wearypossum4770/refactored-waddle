/**
 * @copyright https://leetcode.com/problems/sorting-the-sentence/
 * 
 */
const sortSentence = sentence => {
    let target = Array(sentence.length)
        sentence.match(/\w+\d+/g).forEach(word=>{
let {position} = word.match(/(?<position>\d+)/).groups
target[parseInt(position)] = word

}) 
    return target
}
console.log(sortSentence('is2 sentence4 This1 a3'))
export default sortSentence