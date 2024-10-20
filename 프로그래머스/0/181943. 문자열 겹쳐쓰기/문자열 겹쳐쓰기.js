function solution(my_string, overwrite_string, s) {
    let strarr = my_string.split('');
    let overarr = overwrite_string.split('');
    let indexNum = Number(s)
    
    let answerArr = strarr.map((a,idx)=>idx<Number(indexNum)||idx>=Number(indexNum)+overarr.length?a:overarr[idx-Number(indexNum)])

    return answerArr.join('')
}