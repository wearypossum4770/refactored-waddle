import Glibc
import Foundation

func SquareRoot(of number:Double=0) -> Double?{
  if number > -1{
      return pow(number, 0.5);

  }
  return nil;

}
var four = SquareRoot(of :4) as Any 
print(four)