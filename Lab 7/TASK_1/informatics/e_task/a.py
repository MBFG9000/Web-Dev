def min(a: int, b: int, c: int, d: int) -> int:
    result = a
    if b < result:
        result = b
    if c < result:
        result = c
    if d < result:
        result = d
    return result

a, b, c, d = input().split()

print(min(a, b, c, d))