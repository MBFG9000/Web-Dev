#https://www.hackerrank.com/challenges/py-if-else
#!/bin/python3

import math
import os
import random
import re
import sys



if __name__ == '__main__':
    n = int(input().strip())
    
    if(n % 2 == 1):
        print("Weird")
    else:
        if(n > 20):
            print("Not Weird")
        elif(2 <= n and n <= 5):
            print("Not Weird")
        else:
            print("Weird")
            
