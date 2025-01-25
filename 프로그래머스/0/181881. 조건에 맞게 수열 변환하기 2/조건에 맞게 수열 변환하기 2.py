def solution(arr):
    answer = 0
    while True:
        arr1 = [item//2 if item >=50 and item %2==0 else (item*2+1 if item<50 and item%2==1 else item) for item in arr]
        answer+=1
        if arr == arr1:
            break
        arr = arr1
    return answer-1