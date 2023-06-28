const solution = number => {
    let sum = 0
    let i = 3
    while (i < number) {
        if (i % 3===0 || i % 5===0) {

            sum += i
        }
        i++
    }
    return sum

};
solution(10)