const rangeExtraction = (array) => {
    let extracted = []
    let curRangeArr = []
    let curRange = ''
    for (let i = 0; i < array.length; i++) {

        if (curRangeArr.length === 0) {
            curRangeArr.push(array[i])
        } else if (curRangeArr[curRangeArr.length - 1] === array[i] - 1) {
            curRangeArr.push(array[i])
        } else {
            if (curRangeArr.length > 2) {
                curRange = curRangeArr[0].toString() + '-' + curRangeArr[curRangeArr.length - 1].toString()
                extracted = extracted.concat(curRange)
                curRangeArr=[]
                curRangeArr.push(array[i])

            } else {
                extracted = extracted.concat(curRangeArr)
                curRangeArr = []
                curRangeArr.push(array[i])
            }
        }
        if (i === array.length - 1) {
            if (curRangeArr.length > 2) {
                curRange = curRangeArr[0].toString() + '-' + curRangeArr[curRangeArr.length - 1].toString()
                extracted = extracted.concat(curRange)
            } else {
                extracted = extracted.concat(curRangeArr)
                curRangeArr = []
                curRangeArr.push(array[i])
            }
        }
    }

    console.log(extracted.join(','))

}

rangeExtraction([-3, -2, 1, 2, 3, 6])

