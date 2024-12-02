from collections import Counter
def solution(a, b, c, d):
    numbers=[a,b,c,d]
    nums=list(set(numbers))
    count = Counter(numbers)
    answer = 0
    if len(nums) ==1:
        answer = 1111*nums[0]
    elif len(nums)==2:
        countThree=[num for num,cnt in count.items() if cnt==3]
        if countThree:
            nums.remove(countThree[0])
            answer = (10*countThree[0]+nums[0])**2
        else:
            answer = (nums[0]+nums[1])*abs(nums[0]-nums[1])
    elif len(nums)==3:
        uniqueNums = [num for num in numbers if count[num]==1]
        answer = uniqueNums[0]*uniqueNums[1]
    else:
        answer = min(numbers)
    return answer