num = int(input())

def sign(x:int) -> int:
    if(x > 0):
        return 1
    elif(x < 0):
        return -1
    else:
        return x
    
print(sign(num))