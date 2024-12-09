def solution(my_string, is_suffix):
    arr=list()

    while len(my_string) > 0:
        arr.append(my_string)
        my_string = my_string[1:]

    return int(is_suffix in arr)