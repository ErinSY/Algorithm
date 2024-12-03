def solution(my_string, queries):
    listStr = list(my_string)
    for item in queries:
        listStr[item[0]:item[1]+1]=listStr[item[0]:item[1]+1][::-1]
    return ''.join(listStr)