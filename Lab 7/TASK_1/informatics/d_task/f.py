n = int(input())
A = input().split()
count = 0
if(len(A) >= 3):
    prev = int(A[0])
    now = int(A[1])
    for i in range(2,n):
        next = int(A[i])
        if(prev < now and now > next):
            count += 1
        prev = now
        now = next

print(count)