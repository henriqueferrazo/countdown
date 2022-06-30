import { useEffect, useState } from "react"
import { CountdownUtilMs } from "./util/CountdownUtilMs"
import dayjs from "dayjs"
import "./Countdown.css"

const valueDataDefault = {
    day: "00",
    hours: "00",
    minutes: "00",
    seconds: "00"
}

export default function Countdown() {
    const [valueDate, setValueDate] = useState(valueDataDefault)
    const [date, setDate] = useState(false);


    useEffect(() => {
        const interval = setInterval(() => {
            tempoIncrement(date);
        }, 1000)

        return () => clearInterval(interval);
    }, [date])

    function tempoIncrement(countddown) {
        setValueDate(CountdownUtilMs(countddown));
        console.log(dayjs())
    }

    function retrieveDate(event) {
        const value = event.target.value;
        const splitValueDate = value.split("-");
        const dateMs = new Date(splitValueDate[0], splitValueDate[1] - 1, splitValueDate[2]);
        // console.log(dateMs.getTime());
        // console.log(value)
        setDate(dateMs.getTime())
    }

        return (
            <>
                <center>
                    <div id="displayStopwatch">
                        <h1 class="numerosDisplay">{valueDate.day}</h1>
                        <h1 class="numerosDisplay">dia</h1>
                        <h1 class="numerosDisplay">:</h1>
                        <h1 class="numerosDisplay">{valueDate.hours}</h1>
                        <h1 class="numerosDisplay">horas</h1>
                        <h1 class="numerosDisplay">:</h1>
                        <h1 class="numerosDisplay">{valueDate.minutes}</h1>
                        <h1 class="numerosDisplay">minutos</h1>
                        <h1 class="numerosDisplay">:</h1>
                        <h1 class="numerosDisplay">{valueDate.seconds}</h1>
                        <h1 class="numerosDisplay">segundos</h1>
                    </div>
                    <div>
                        <input type="date" onChange={retrieveDate} />
                        <input type="submit" />
                    </div>
                </center>
            </>
        )
    // }
}