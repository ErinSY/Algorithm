def solution(n):
    answer = 0
    while n>=0:
        if n%2==0:
            answer += n**2
        else:
            answer += n
        n=n-2
    return answer