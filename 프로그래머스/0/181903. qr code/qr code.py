def solution(q, r, code):
    answer=''
    for idx,str in enumerate(code):
        if idx%q==r:
            answer+=str
    return answer