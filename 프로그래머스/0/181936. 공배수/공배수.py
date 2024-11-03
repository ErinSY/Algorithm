def solution(number, n, m):
    answer = 1
    if(n !=0 or m!=0 ):
        answer =int(number%n == number%m == 0)
    
    return answer