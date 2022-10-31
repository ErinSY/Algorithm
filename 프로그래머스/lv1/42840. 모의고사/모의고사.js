function solution(answers) {
    var answer = [0,0,0];
    let result=[];
    let students={
        1:[],
        2:[],
        3:[]
    }
   for (let i=0;i<answers.length;i++){
       let method= [[1,2,3,4,5],[2,1,2,3,2,4,2,5],[3,3,1,1,2,2,4,4,5,5]]
       method.map((el,idx)=>el.map((ele,im)=>students[idx+1].push(ele)))
   }
   for (let i=1;i<=3;i++){
      answers.map((el,idx)=>students[i][idx]===el?answer[i-1]+=1:'') 
   }
   answer.map((el,idx)=>el===Math.max(...answer)?result.push(idx+1):'')
    return result;
}