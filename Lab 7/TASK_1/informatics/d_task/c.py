n = int(input())
A = input().split()

print(len([x for x in A if int(x) > 0]))