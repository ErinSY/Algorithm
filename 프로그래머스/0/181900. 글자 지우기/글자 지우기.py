def solution(my_string, indices):
    indices = sorted(indices)
    return ''.join([char for i, char in enumerate(my_string) if i not in indices])