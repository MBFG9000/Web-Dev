def alarm_clock(day, vacation):
  if(vacation):
    alarm = ['off', '10:00', '10:00', '10:00', '10:00', '10:00', 'off']
  else:
    alarm = ['10:00', '7:00', '7:00', '7:00', '7:00', '7:00', '10:00']
    
  return alarm[day]