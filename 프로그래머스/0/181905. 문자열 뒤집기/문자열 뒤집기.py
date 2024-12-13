def solution(my_string, s, e):
    
    toChange=my_string[s:e+1]
    return my_string[0:s]+''.join(list(toChange)[::-1])+my_string[e+1:]