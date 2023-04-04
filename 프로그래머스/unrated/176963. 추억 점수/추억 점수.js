function solution(name, yearning, photo) {
    let score = {};
    let answer = [];
        name.forEach((el, idx) => {
            score[el] = yearning[idx];
            });

        photo.forEach(el => {
            let total = 0;
            el.forEach(name => {
                 Object.keys(score).includes(name) && (total += score[name]);
                 });
             answer.push(total);
            });
    return answer
}