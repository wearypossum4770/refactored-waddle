// https://edabit.com/collection/4YZFySaYvDhd4fgLh
/**
 * @copyright https://edabit.com/challenge/QkuiL7XApt2RMQqTJ 
 * @param {string} string 
 * @returns 
 */
const findTheTime = (str)  => {
    const {time} = str.match(/(?<time>[0-9]{2}:[0-9]{2})/)?.groups
    return time
}
/**
 * @copyright https://edabit.com/challenge/t2zrueG7T4MDhaz6o
 * @param {string} str 
 * @returns ['<a href="/">', '<input type="radio" checked>', '<b>']
 */
const findHTMLTags = (str) => {
    const parts = [...str.matchAll(/<\w+>|<w+\s+\w+>/g)]
    return parts
}
/**
 * @copyright https://edabit.com/challenge/e5PvcKmnbdNahT9TZ
 * @param {string} str 
 * @returns ["-1.5", "0", "2", "-123.4"]
 */
const findAllNumbers = str=> {
    const numbers = [...str.match(/\d+|\d+\.\d+|-\d+\.\d+|-\d+/g)]
    return numbers
}

console.log(findAllNumbers("-1.5 0 2 -123.4."))
console.log(findHTMLTags('<> <a href="/"> <input type="radio" checked> <b>'))
console.log(findTheTime('Breakfast at 09:00 in the room 123:456.'))