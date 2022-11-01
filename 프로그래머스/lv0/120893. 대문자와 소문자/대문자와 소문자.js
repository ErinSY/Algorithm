function solution(str) {
    let lower = str.toLowerCase().split('');
    return str.split('').map((el,idx)=>el===lower[idx]?el.toUpperCase():el.toLowerCase()).join('');
}