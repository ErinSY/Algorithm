def solution(code):
    answer = ''
    mode =False
    for idx,char in enumerate(code):
        if char =="1":
            mode = not mode
        if int(mode) ==1 and idx%2 ==1:
            answer +=char
            
        if int(mode) ==0 and idx%2 ==0:
            answer +=char

    if answer == '' : 
        return 'EMPTY' 
    else : 
        return answer.replace('1','')
