def solution(start_num, end_num):
    arr= [num for num in range(start_num+1)][end_num:start_num+1:1]
    arr.sort(reverse=True)
    return arr