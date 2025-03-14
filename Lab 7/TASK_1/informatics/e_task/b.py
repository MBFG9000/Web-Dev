def power(a: float, b: int) -> float:
    result = 1.0
    for _ in range(b):
        result *= a
    return result

a, b = input().split()

print(power(float(a), int(b)))