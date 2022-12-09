function solution(s) {
    let [count1, count2, result] = [0, 0, 0]
    let ss = s.split('');
    let x = null;
    for (let i = 0; i <= ss.length - 1 ; i++) {
        if (x === null) {
            x = ss[i];
        }
        
        ss[i] === x ? count1++ : count2++;
        count1 === count2 ? ((x = null), (count1 = 0), (count2 = 0), result++) : '';
 
    }

    // console.log(`count1: ${count1}`)
    return count1 > 0 ? result + 1 : result;
}

// // index our of range -> return undefined in javascript
// // i = 0 -> x = 'a'
// //          count1 = 1
// // 

// // i = 1 -> x = 'a'
// //          undefined === 'a' ? count1++ : count2++ -> count2 = 1


// function solution(s){
//     const checkNull = null;
//     const checkundefined = undefined;
    
//     const num = checkNull ?? 2;
//     const num1 = checkundefined && 3;
//     const num2 = checkNull && 4
    
//     if (undefined){
//         console.log(undefined);
//     }
    
//     console.log(num)
//     console.log(num1)
//     console.log(num2)
    
//     return null;
// }