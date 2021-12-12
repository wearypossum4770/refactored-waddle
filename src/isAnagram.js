export default function isAnagram(string1, string2){
    let string1_cleaned = [...string1.toLowerCase()].reduce((tally, index)=>{
        tally[index] = (tally[index] || 0) + 1;
        return tally;
    },{})
    return string1_cleaned
}

console.log(isAnagram('abcde2', 'c2abed'))
console.log(isAnagram("POP", "pop"))