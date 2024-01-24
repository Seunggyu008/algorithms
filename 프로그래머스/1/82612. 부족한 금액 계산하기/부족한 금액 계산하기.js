function solution(price, money, count) {
    let requiredMoney = 0;
    for(let i = 0; i <= count; i++) {
        requiredMoney += price*i
    }
    
    let moneyDiff = money - requiredMoney
    
    if(moneyDiff> 0) {
        return 0;
    } else {
        return Math.abs(moneyDiff);
    }
    
}

solution(3, 20, 4);