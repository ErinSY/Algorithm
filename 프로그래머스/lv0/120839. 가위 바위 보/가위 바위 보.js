function solution(rsp) {
    return rsp.split('').map((el)=>el-0===2?0:el-0===0?5:el-0===5?2:"").join('');
}