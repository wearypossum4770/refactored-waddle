export default function luhnAlgorithm(number) {
  let array = Array(number.length);
  let num;
  for (let i = 0; i < number.length; i++) {
    num = parseInt(number[i]);
    if (i === number.length) {
      break;
    }
    if (i % 2 === 0) {
      array[i] = num;
    } else if (i % 2 !== 0 && num > 5) {
      array[i] = num * 2 - 9;
    } else {
      array[i] = num * 2;
    }
  }
  // let checkDigit = array.pop()
  return array.reduce((acc, curr) => acc + curr, 0) % 10 === 0;
}

console.log(luhnAlgorithm("79927398713")); //
console.log(luhnAlgorithm("79927398710")); //
console.log(luhnAlgorithm("79927398711")); //
console.log(luhnAlgorithm("79927398712")); //
console.log(luhnAlgorithm("79927398713")); //
console.log(luhnAlgorithm("79927398714")); //
console.log(luhnAlgorithm("79927398715")); //
console.log(luhnAlgorithm("79927398716")); //
console.log(luhnAlgorithm("79927398717")); //
console.log(luhnAlgorithm("79927398718")); //
console.log(luhnAlgorithm("79927398719")); //

console.log(luhnAlgorithm("4485813894235672")); //
console.log(luhnAlgorithm("4024007127348729")); //
console.log(luhnAlgorithm("4716603217622584884")); //
console.log(luhnAlgorithm("2221009458656592")); //
console.log(luhnAlgorithm("5553177670994256")); //
console.log(luhnAlgorithm("5200076195389330")); //
console.log(luhnAlgorithm("379891573935090")); //
console.log(luhnAlgorithm("345128790740198")); //
console.log(luhnAlgorithm("376601022526918")); //
console.log(luhnAlgorithm("6011946625932528")); //
console.log(luhnAlgorithm("6011160083047114")); //
console.log(luhnAlgorithm("6011446016113639370")); //
console.log(luhnAlgorithm("3529012308493411")); //
console.log(luhnAlgorithm("3544568065306329")); //
console.log(luhnAlgorithm("3589881235594203486")); //
console.log(luhnAlgorithm("5413509317228492")); //
console.log(luhnAlgorithm("5410094180036192")); //
console.log(luhnAlgorithm("5465755400618803")); //
console.log(luhnAlgorithm("30477700579083")); //
console.log(luhnAlgorithm("30367138622482")); //
console.log(luhnAlgorithm("30434676600054")); //
console.log(luhnAlgorithm("36827451071611")); //
console.log(luhnAlgorithm("36908109371429")); //
console.log(luhnAlgorithm("36606245746427")); //
console.log(luhnAlgorithm("6759236442369955")); //
console.log(luhnAlgorithm("6763293427152256")); //
console.log(luhnAlgorithm("5018547048647993")); //
console.log(luhnAlgorithm("4026042281476733")); //
console.log(luhnAlgorithm("4917255366438723")); //
console.log(luhnAlgorithm("4175006749693543")); //
console.log(luhnAlgorithm("6393490991473419")); //
console.log(luhnAlgorithm("6393225584758655")); //
console.log(luhnAlgorithm("6382571164940319"));

luhn_algorithm;
