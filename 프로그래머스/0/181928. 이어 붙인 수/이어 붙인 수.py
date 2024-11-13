def solution(num_list):
    even=''
    odd=''
    for item in num_list:
        if item%2==0:
            even +=str(item)
        else:
            odd +=str(item)
    return int(even)+int(odd)