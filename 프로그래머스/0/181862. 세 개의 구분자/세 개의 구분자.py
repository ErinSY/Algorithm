def solution(myStr):
    arr = []
    index = 0

    for idx, char in enumerate(myStr):
        if char in ['a', 'b', 'c']:
            substr = myStr[index:idx] 
            if substr:
                arr.append(substr)
            index = idx + 1 

    substr = myStr[index:]
    if substr:
        arr.append(substr)

    return arr if arr else ["EMPTY"]