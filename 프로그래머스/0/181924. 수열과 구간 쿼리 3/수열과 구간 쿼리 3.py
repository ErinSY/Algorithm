def solution(arr, queries):
    for item in queries:
        arr[item[0]], arr[item[1]] = arr[item[1]], arr[item[0]]
    
    return arr