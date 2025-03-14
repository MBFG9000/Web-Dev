def combo_string(a, b):
  if (len(a) < len(b)):
    short, long = a, b
  else:
    long, short = a, b
  return short + long + short
