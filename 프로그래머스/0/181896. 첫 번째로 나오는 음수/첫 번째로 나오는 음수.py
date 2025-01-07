def solution(num_list):
    result=-1
    for idx,item in enumerate(num_list):
        if item<0:
            result=idx
            break
    return result