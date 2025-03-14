def same_first_last(nums):
  if(len(nums) == 0):
    return False
  if(len(nums) == 1):
    return True
  
  if(nums[0] == nums[len(nums) - 1]):
    return True
  else:
    return False
