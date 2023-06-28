



const solution = number => {

    const binaryString = number.toString(2)

    const withOutZero = binaryString.replaceAll('0', '')

    return withOutZero.length

};
solution(10)