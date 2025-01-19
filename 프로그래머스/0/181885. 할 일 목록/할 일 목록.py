def solution(todo_list, finished):
    answer = []
    for a,b in enumerate(finished):
        if not b:
            answer.append(todo_list[a])
    return answer