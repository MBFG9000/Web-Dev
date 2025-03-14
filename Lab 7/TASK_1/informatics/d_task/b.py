n = int(input())
A = input().split()

print(" ".join([x for x in A if int(x) % 2 == 0]))