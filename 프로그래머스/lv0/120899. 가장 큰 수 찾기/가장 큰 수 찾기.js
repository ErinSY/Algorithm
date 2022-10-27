function solution(arr) {
    return [Math.max(...arr),arr.indexOf(Math.max(...arr))];
}