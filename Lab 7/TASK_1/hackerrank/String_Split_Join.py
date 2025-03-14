# https://www.hackerrank.com/challenges/python-string-split-and-join

def split_and_join(line):
    A = line.split()
    return "-".join([x for x in A])

if __name__ == '__main__':
    line = input()
    result = split_and_join(line)
    print(result)