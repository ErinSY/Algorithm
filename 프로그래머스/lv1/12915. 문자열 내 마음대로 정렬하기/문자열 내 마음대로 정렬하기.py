def solution(strings, n):
    # new_arr=sorted(strings)
    # return sorted(new_arr, key=lambda x:x[n])
    return sorted(strings, key=lambda x:(x[n],x))