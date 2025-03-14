import math

a = int(input())
b = int(input())

start = math.ceil(math.sqrt(a))

for i in range(start, int(math.sqrt(b)) + 1):
    square = i * i
    if a <= square <= b:
        print(square)
