def solution(num_list):
    answer=1
    if len(num_list)>=11:
        answer+=sum(num_list)-1
    else :
        for num in num_list:
            answer *=num
            
    return answer