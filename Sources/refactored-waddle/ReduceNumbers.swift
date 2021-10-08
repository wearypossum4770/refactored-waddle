func sum(numbers: Int...)-> Int {
    var result = 0;
    for num in numbers{
        result = result+num
    }
      print("Sum = \(result)")
return result
}

let target = sum(numbers: 1, 2, 3)
print(target)