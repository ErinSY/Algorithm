def solution(arr, flag):
    X = []
    for idx,bool in enumerate(flag):
        if bool:
            X+=([arr[idx]]*(arr[idx]*2))
        else :
            X=X[:-arr[idx]]
    return X


