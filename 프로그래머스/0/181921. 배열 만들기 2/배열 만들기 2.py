def solution(l, r):
    answer = []
    for item in range(l,r+1):
        filtered_str = ''.join([digit for digit in str(item) if digit not in {'0', '5'}])
        if filtered_str=='':
            answer.append(item)
    if len(answer)==0:
        answer=[-1]

    return answer