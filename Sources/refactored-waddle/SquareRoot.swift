func SquareRoot(number:Int) -> Int?{
  guard number>= 0 else {
    return nil
  }
  return pow(number, 0.5)
}