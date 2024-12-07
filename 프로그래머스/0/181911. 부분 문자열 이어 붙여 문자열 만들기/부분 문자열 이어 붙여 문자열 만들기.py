def solution(my_strings, parts):
    result=''
    for indx,num in enumerate(parts):
        result += my_strings[indx][num[0]:num[1]+1]
    return result