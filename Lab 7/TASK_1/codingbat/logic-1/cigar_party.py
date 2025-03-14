def cigar_party(cigars, is_weekend):
  if(cigars < 40):
    return False
  elif(is_weekend):
    return True
  elif(cigars > 60):
    return False
  else:
    return True