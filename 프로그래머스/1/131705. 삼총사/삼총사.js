function solution(number) {
    let count = 0;

    //backtrack 알고리즘과 재귀함수를 사용
    function backtrack(start, sum, selected) {
        if(selected.length === 3 && sum === 0) {
            count++;
        }
        
        for(let i = start; i < number.length; i++) {
            selected.push(number[i]);
            backtrack(i + 1, sum + number[i], selected);
            selected.pop();
        }
    }
    
    backtrack(0, 0, []);
    
    return count;
}

solution([-2, 3, 0, 2, -5]);