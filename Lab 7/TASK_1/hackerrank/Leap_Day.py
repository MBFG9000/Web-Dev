# https://www.hackerrank.com/challenges/write-a-function

def is_leap(year):
    leap = (year % 4 == 0 and not year % 100 == 0 or year % 400 == 0)
    
    return leap

year = int(input())
print(is_leap(year))