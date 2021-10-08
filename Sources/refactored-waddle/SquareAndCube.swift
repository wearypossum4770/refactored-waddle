func SquareAndCube(number: Int) -> (Int, Int, Int) {
  let  square = number * number
  let  cube = square * number 
  return (number, square, cube)
}
var result = SquareAndCube(number:5)
print(result)