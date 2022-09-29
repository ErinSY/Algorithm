function solution(num) {
    var answer = 1;
    var result=num;
    while(answer<500){
      result%2===0?result=result/2:result=(result*3)+1;
    if(result===1){
        break
    }
        answer++ 
    }
 return answer>=500?-1:num===1?0:answer
    
    }


    
