const longestSlideDown = (array) => {

    const addPreviousRow = (row, nextRow) => {
        if (row.length === 1) {
            return nextRow.map(num => num + row[0])
        } else {
            nextRow[0] += row[0]
            nextRow[nextRow.length - 1] += row[nextRow.length - 2]

            for (let i = 1; i < nextRow.length - 1; i++) {
                const biggestParent = row[i - 1] > row[i] ? row[i - 1] : row[i]
                nextRow[i] += biggestParent
            }
        }
        return nextRow
    }

    for (let i = 1; i < array.length; i++) {
        array[i] = addPreviousRow(array[i - 1], array[i])
    }

    const answer = Math.max(...array[array.length-1])
    console.log(answer)
    return answer
}

const pyramid = [[75],
    [95, 64],
    [17, 47, 82],
    [18, 35, 87, 10],
    [20, 4, 82, 47, 65],
    [19, 1, 23, 75, 3, 34],
    [88, 2, 77, 73, 7, 63, 67],
    [99, 65, 4, 28, 6, 16, 70, 92],
    [41, 41, 26, 56, 83, 40, 80, 70, 33],
    [41, 48, 72, 33, 47, 32, 37, 16, 94, 29],
    [53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14],
    [70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57],
    [91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48],
    [63, 66, 4, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31],
    [4, 62, 98, 27, 23, 9, 70, 98, 73, 93, 38, 53, 60, 4, 23]]

longestSlideDown(pyramid)

