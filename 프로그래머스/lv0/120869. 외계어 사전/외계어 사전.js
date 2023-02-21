function solution(spell, dic) {
    let boolgroup=[]
    for (i of dic){
    let bool=[]
        for(j of spell){
            bool.push(i.includes(j))
             }
    boolgroup.push(bool)
        }
    let answer = boolgroup.map(el=>el.includes(false));
    return answer.includes(false)?1:2
}