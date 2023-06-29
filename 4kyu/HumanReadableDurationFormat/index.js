const formatDuration = sec => {
    if (sec === 0) return 'now'
    const years = Math.floor(sec / 31536000)
    const yearsToString = years ? years === 1 ? years + ' year' : years + ' years' : ''

    const days = Math.floor((sec % 31536000) / 86400)
    const daysToString = days ? days === 1 ? days + ' day' : days + ' days' : ''

    const hours = Math.floor((sec % 86400) / 3600)
    const hoursToString = hours ? hours === 1 ? hours + ' hour' : hours + ' hours' : ''

    const minutes = Math.floor((sec % 3600) / 60)
    const minutesToString = minutes ? minutes === 1 ? minutes + ' minute' : minutes + ' minutes' : ''

    const seconds = sec % 60
    const secondsToString = seconds ? seconds === 1 ? seconds + ' second' : seconds + ' seconds' : ''


    const array = [yearsToString, daysToString, hoursToString, minutesToString, secondsToString].filter(str => str !== '')
    const arr2 = []

    for (let i = 0; i < array.length; i++) {
        if (i === array.length - 2) arr2.push(array[i] + ' and ')
        else if (i === array.length - 1) arr2.push(array[i])
        else arr2.push(array[i] + ', ')
    }



    const time = arr2.join('')

    console.log(time)
    return time
}

formatDuration(31588888)

//Красивое решение
/*function formatDuration (seconds) {
    var time = { year: 31536000, day: 86400, hour: 3600, minute: 60, second: 1 },
        res = [];

    if (seconds === 0) return 'now';

    for (var key in time) {
        if (seconds >= time[key]) {
            var val = Math.floor(seconds/time[key]);
            res.push(val += val > 1 ? ' ' + key + 's' : ' ' + key);
            seconds = seconds % time[key];
        }
    }

    return res.length > 1 ? res.join(', ').replace(/,([^,]*)$/,' and'+'$1') : res[0]
}

*/
