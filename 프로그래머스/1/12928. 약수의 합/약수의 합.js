function solution(n) {
    let arr = [];
    for(let i = 0; i <= n; i++) {
            arr.push(n / i);    
    } 
    
    const filteredArr = arr.filter((num) => Number.isInteger(num));
    console.log(filteredArr);
    
    return filteredArr.reduce((a, c) => a + c, 0);
}

solution(5);

