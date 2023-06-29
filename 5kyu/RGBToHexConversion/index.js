const rgb = (r, g, b) => {
    const convertTo16Bit = (number) => {
        if (number < 0) return '00'
        else if (number > 255) number = 255
        else if(number<16) return '0'+number.toString(16)
        return number.toString(16)
    }
    const color = convertTo16Bit(r) + convertTo16Bit(g) + convertTo16Bit(b)
    console.log(color)
    return color.toUpperCase()
}

rgb(0, 0, -20)


