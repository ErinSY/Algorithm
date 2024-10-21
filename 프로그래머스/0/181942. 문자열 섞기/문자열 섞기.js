function solution(str1, str2) {
    let str1Arr=str1.split('');
    let str2Arr=str2.split('');
    let totalLength=str1Arr.length + str2Arr.length;
    var resultArr=[];
    
    for(let i=0;i<totalLength;i++){
        if(i%2 ==0){
            resultArr.push(str1Arr[0]);
            str1Arr.shift()
        }else{
            resultArr.push(str2Arr[0]);
            str2Arr.shift()
    }
}
    
    return resultArr.join('');
}