str = input()
strArr=[]
for i in str:
    if i.isupper():
        strArr.append(i.lower())
    else:
        strArr.append(i.upper())

print(''.join(strArr))