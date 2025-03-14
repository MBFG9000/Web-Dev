def close_far(a, b, c):
    close = abs(a - b) <= 1
    far = abs(a - c) >= 2 and abs(b - c) >= 2
    if close and far:
        return True

    close = abs(a - c) <= 1
    far = abs(a - b) >= 2 and abs(b - c) >= 2
    if close and far:
        return True

    return False
