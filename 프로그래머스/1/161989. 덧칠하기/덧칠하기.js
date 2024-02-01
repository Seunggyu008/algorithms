function solution(n, m, section) {
    let answer = 0;
    let painted = 0;
    
    section.forEach((n) => {
        if(n > painted) {
            painted = n + m - 1;
            answer++;
        }
    })
    return answer;
}