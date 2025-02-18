import re
def solution(myString, pat):
    answer = 0
    matches = re.finditer(r"(?=" + pat + ")", myString) 
    for match in matches:
        answer+=1
    return answer