
def solution(a, b, c):
    strList=list(set([a,b,c])) 
    answer = 0
    if len(strList) == 3:
        answer = a+b+c
    elif len(strList)==2:
        answer = (a + b + c) * (a**2 + b**2 + c**2 )
    else :
        answer = (a + b + c) * (a**2 + b**2 + c**2 ) * (a**3 + b**3 + c**3 )
    return answer
