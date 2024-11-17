def solution(n, control):
    answer = n
    for itm in control:
        if itm =='w':
            answer +=1
        elif itm =='s':
            answer -=1
        elif itm =='d':
            answer +=10
        else :
            answer -=10
    return answer