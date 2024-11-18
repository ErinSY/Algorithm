def solution(numLog):
    answer = ''
    for idx,val in enumerate(numLog):
        if idx>0:
            if numLog[idx]- numLog[idx-1] ==1:
                answer+='w'
            elif numLog[idx]- numLog[idx-1] ==10:
                answer+='d'
            elif numLog[idx-1]- numLog[idx] ==1:
                answer+='s'
            else: 
                answer+='a'
    return answer