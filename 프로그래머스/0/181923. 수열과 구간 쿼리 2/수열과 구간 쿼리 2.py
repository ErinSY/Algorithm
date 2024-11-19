def solution(arr, queries):
    answer = []
    for item in queries:
        candidates = [x for x in arr[item[0]:item[1]+1] if x > item[2]]
        answer.append(min(candidates) if candidates else -1)

    return answer

