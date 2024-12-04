def solution(intStrs, k, s, l):
    return [int(item[s:s+l]) for item in intStrs if int(item[s:s+l])>k]