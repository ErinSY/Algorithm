def solution(myString, pat):
    return int(pat in''.join(['B' if word =='A' else 'A' for word in myString]))