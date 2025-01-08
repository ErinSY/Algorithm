def solution(arr):
    answer = [-1]
    if 2 in arr:
        last = len(arr) - 1 - arr[::-1].index(2)
        first = arr.index(2)
        answer=arr[first:last+1]
    return answer