def solution(num_list):
    numSum=1
    numSum2=0
    for item in num_list:
        numSum *=item;
        numSum2 +=item
    return int(numSum<(numSum2**2))