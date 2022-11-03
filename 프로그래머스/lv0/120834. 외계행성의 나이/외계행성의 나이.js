function solution(age) {
     let answer=[]
        
     for (let i=0;i<String(age).length;i++){
        answer.push(String.fromCharCode((String(age).substr(i,1)-0)+97))
    }
    
     return answer.join('')
}