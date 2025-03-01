def solution(myString):
    arr = myString.split('x')
    return [word for word in sorted(arr) if word]