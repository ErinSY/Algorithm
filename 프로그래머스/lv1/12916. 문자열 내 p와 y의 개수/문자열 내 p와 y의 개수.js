function solution(s){
    var sarr = s.toLowerCase();
    let parr=[];
    let yarr=[];
    let answer=true;
    for (let i of sarr){
     (i==="p")?parr.push(i):(i==="y")?yarr.push(i):null}
    
    parr.length!==yarr.length? answer=false:answer=true;

    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
  
    return answer
}