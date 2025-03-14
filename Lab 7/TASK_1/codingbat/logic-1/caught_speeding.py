def caught_speeding(speed, is_birthday):
    if is_birthday:
        speed -= 5  # Increase the allowed speed by 5 if it's the birthday

    if speed <= 60:
        return 0  # No ticket
    elif speed <= 80:
        return 1  # Small ticket
    else:
        return 2  # Big ticket