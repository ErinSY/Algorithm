def solution(n):
    answer = 1
    i=1
    while answer<=n:
        answer=answer*i
        i=i+1
    return i-2