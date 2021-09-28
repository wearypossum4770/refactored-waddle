// "I" ,1,
// "V" ,5,
// "X" ,10,
// "L" ,50,
// "C" ,100,
// "D" ,500,
// "M" ,1000,

let romanNumerals = [
"I",
"V",
"X",
"L",
"C",
"D",
"M",
]
let numeralsToInteger = new Map([
    ["I" ,1],
["V" ,5],
["X" ,10],
["L" ,50],
["C" ,100],
["D" ,500],
["M" ,1000],
])

export default function romanToInt(roman){
let num = 0
let previous,next
for (let index=0;index<roman.length;index++){
    previous = numeralsToInteger.get(roman[index])
    next = 
       if (roman[index]>roman[index-1]){
    
   } 
}
return num
}


console.log(romanToInt("III"))
console.log(romanToInt("IV"))
console.log(romanToInt("IX"))
console.log(romanToInt("LVIII")) //58
console.log(romanToInt("MCMXCIV")) //1994
