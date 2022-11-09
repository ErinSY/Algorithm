function solution(str) {
    return [...new Set(str.split(''))].join('')
}