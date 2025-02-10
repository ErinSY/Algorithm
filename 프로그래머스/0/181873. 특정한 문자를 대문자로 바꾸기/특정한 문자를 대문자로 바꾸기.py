def solution(my_string, alp):
    return ''.join([str.upper() if str.lower() == alp else str.lower() for str in my_string ])