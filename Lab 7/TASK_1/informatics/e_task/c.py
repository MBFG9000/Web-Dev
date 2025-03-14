def xor(x, y):
    return int(not x and y or x and not y)

a, b = input().split()

print(xor(int(a), int(b)))
