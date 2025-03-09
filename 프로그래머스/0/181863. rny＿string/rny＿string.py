def solution(rny_string):
    return ''.join(['rn' if word == 'm' else word for word in rny_string])