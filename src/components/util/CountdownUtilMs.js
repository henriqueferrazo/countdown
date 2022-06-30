import dayjs from "dayjs"


export function CountdownUtilMs(times) {
    const timeDayjs = dayjs(times);
    const nowDayjs = dayjs();

    if (timeDayjs.isBefore(nowDayjs)) {
      
        return {
            seconds: '00',
            minutes: '00',
            hours: '00',
            days: '00'
        }
    }

    return {
        seconds: getSeconds(nowDayjs, timeDayjs),
        minutes: getMinutes(nowDayjs, timeDayjs),
        hours: getHours(nowDayjs, timeDayjs),
        day: getDay(nowDayjs, timeDayjs)
    }
}

function getSeconds(nowDayjs, timeDayjs) {
    const seconds = timeDayjs.diff(nowDayjs, "seconds") % 60;
    return padZeros(seconds, 2);
}

function getMinutes(nowDayjs, timeDayjs) {
    const minutes = timeDayjs.diff(nowDayjs, "minutes") % 60;
    return padZeros(minutes, 2);
}

function getHours(nowDayjs, timeDayjs) {
    const hours = timeDayjs.diff(nowDayjs, "hours") % 24;
    return padZeros(hours, 2);
}

function getDay(nowDayjs, timeDayjs) {
    const day = timeDayjs.diff(nowDayjs, "day") % 24;
    return day.toString()
}

function padZeros(number, minLength) {
    const numberString = number.toString();
    if (numberString.length >= minLength) return numberString;
    return "0".repeat(minLength - numberString.length) + numberString;
}