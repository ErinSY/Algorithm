def solution(arr, queries):
    for i,a in queries:
        for idx in range(i,a+1):
            arr[idx]+=1
    return arr