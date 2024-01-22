function solution(t, p) {
    const countSubstrings = (str) => {
        let count = 0;
        for (let i = 0; i <= str.length - p.length; i++) {
            const substring = str.substring(i, i + p.length);
            if (parseInt(substring) <= parseInt(p)) {
                count++;
            }
        }
        return count;
    };

    let result = 0;
    for (let i = 0; i <= t.length - p.length; i++) {
        result += countSubstrings(t.substring(i, i + p.length));
    }

    return result;
}
