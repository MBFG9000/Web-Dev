def make_bricks(small, big, goal):
  if (goal > big * 5 + small): 
    return False
  if(goal % 5 > small):
    return False
  return True