def solution(my_string):
    answer = []
    while len(my_string)>0:
        answer.append(my_string)
        my_string=my_string[1:]
    
    answer.sort()
    return answer