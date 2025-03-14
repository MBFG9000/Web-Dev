def make_chocolate(small, big, goal):
    max_big_bars = goal // 5  # максимально возможное количество больших плиток
    big_used = min(big, max_big_bars)  # сколько больших плиток реально можем использовать
    remaining = goal - big_used * 5  # сколько ещё надо добрать маленькими
    if remaining <= small:
        return remaining
    else:
        return -1