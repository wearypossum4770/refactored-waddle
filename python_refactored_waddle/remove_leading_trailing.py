def remove_leading_trailing(value):
    if value in ["0", "00"]:
        return "0"
    array = list(value)
    loop = len(array)
    while loop:
        if array[0] == "0":
            del array[0]
        elif array[-1] == "0":
            del array[-1]
        else:
            loop = False
    if len(array) == 0 or array == ["."]:
        return "0"
    return "".join(array)
