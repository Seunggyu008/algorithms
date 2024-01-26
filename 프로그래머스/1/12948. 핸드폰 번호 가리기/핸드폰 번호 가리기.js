function solution(phone_number) {
    let phone_number_arr = phone_number.split("");
    for(let i = 0; i < phone_number_arr.length - 4; i++){
        phone_number_arr[i] = "*";
    }
    
    return phone_number_arr.join("");
}

solution("027778888");