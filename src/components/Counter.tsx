import { useState } from "react"
import classes from './Counter.module.scss'

export const Counter = () => {

    const [number, setNumber] = useState(0)

    const increment = () => {
        setNumber(number+1)
    }

    return (
        <div className={classes.btn}>
            <div>{number}</div>
            <button onClick={increment}>increment</button>
        </div>
    )
}