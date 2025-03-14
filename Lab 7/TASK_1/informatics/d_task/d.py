n = int(input())
A = input().split()
count = 0

prev = int(A[0])
for i in range(1,n):
    now = int(A[i])
    if(now > prev):
        count += 1
    prev = now

print(count)