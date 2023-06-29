const humanReadable = sec => {


    const hours = Math.floor(sec / 3600)

    const minutes = Math.floor((sec % 3600) / 60)

    const seconds = sec % 60

    const converted = (number) => {
        if (number < 10) {
            return `0${number}`
        }
        else return number

    }


    const time = converted(hours) + ':' + converted(minutes) + ':' + converted(seconds)
    return time
}

humanReadable(3666)


