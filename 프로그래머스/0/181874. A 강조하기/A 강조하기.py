def solution(myString):
    return ''.join([str.upper() if str.lower() == 'a' else str.lower() for str in myString ])