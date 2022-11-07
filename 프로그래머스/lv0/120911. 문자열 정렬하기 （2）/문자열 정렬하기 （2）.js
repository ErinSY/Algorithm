function solution(str) {
    return str.toLowerCase().split('').map(el=>el.charCodeAt(0)).sort((a,b)=>a-b).map(el=>String.fromCharCode(el)).join('');
}