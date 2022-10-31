function solution(size) {
    var answer = 0;
    let wArr=[];
    let hArr=[];
    let arr=size.map(i=>{(wArr.push(i.sort((a,b)=>b-a)[0]));(hArr.push(i.sort((a,b)=>b-a)[1]))})
    return Math.max(...wArr)*Math.max(...hArr);
}