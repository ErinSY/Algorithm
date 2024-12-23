def solution(arr, idx):
    answer=0
    filtered = [i for i,value in enumerate(arr) if value == 1 and i >=idx]
    if len(filtered)>0:
        answer = filtered[0]
    else:
        answer = -1
    return answer