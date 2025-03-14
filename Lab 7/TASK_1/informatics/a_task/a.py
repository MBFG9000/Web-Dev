import math

def hypotenuse(a:float, b:float) -> float:
    return math.sqrt(pow(a, 2) + pow(b, 2))

a = float(input())
b = float(input())

print(hypotenuse(a, b))