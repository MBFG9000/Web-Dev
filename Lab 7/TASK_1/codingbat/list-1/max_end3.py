def max_end3(nums):
  if(nums[0] > nums[2]):
    max = nums[0]
  else:
    max = nums[2]
  
  return [max,] * 3
