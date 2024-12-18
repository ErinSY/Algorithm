def solution(n, k):
    return [num for num in range(n+1) if num%k==0 and num > 0]