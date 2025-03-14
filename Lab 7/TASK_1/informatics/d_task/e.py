n = int(input())
A = input().split()

prev = int(A[0])
for i in range(1,n):
    now = int(A[i])
    if(now * prev > 0):
        print("YES")
        break
    prev = now
else:
    print("NO")