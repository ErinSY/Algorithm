function solution(arr){
    var answer = [];
    for(var m=0; m<arr.length; m++) {
    if (arr[m]!== arr[m+1]){
        answer.push(arr[m])
    } }

    return answer;
}


