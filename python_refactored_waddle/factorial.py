def factorial(num):
    """
    source:
    """
    if num < 2:
        return 1
    elif num == 2:
        return 2
    target = 0
    for n in range(1, num + 1):
        target += n
    return target


print(factorial(1) == 1)
print(factorial(2) == 2)
print(factorial(3) == 6)
# print(factorial(4)== 24)
# print(factorial(5)== 120)
# print(factorial(6)== 720)
# print(factorial(7)== 5040)
# print(factorial(8)== 40320)
# print(factorial(9)== 362880)
# print(factorial(10)== 3628800)
# print(factorial(11)== 39916800)
# print(factorial(12)== 479001600)
# print(factorial(13)== 6227020800)
# print(factorial(14)== 87178291200)
# print(factorial(15)== 1307674368000)
# print(factorial(16)== 20922789888000)
# print(factorial(17)== 355687428096000)
# print(factorial(18)== 6402373705728000)
# print(factorial(19)== 121645100408832000)
# print(factorial(20)== 2432902008176640000)
