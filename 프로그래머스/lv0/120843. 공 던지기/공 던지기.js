function solution(numbers, k) {
    let turn = 1
    for(let i = 0 ; i < k-1 ; i ++) {
        turn+=2
        if(turn > numbers.length-1) {
            turn-=numbers.length
        }
    }
    return turn  
}