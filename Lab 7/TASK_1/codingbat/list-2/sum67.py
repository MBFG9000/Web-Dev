def sum67(nums):
    total = 0
    in_block = False

    for num in nums:
        if num == 6:
            in_block = True  
        elif num == 7 and in_block:
            in_block = False 
        elif not in_block:
            total += num  

    return total
