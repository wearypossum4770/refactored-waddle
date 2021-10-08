func changeName(name: inout String) -> String {
    if name == "Zues"{
        name = "Hercules"
    }
    return name;
}
var username = "Zues"
let visitor = changeName(name:&username)
print(visitor)