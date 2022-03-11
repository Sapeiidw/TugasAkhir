import { useLayoutEffect, useState } from 'react'
import styles from '../styles/Counter.module.css'
import {ButtonDanger, ButtonPrimary} from '../components'

type CounterProps = {
    defaultValue?: number,
}

const Counter = ({defaultValue=0}: CounterProps): JSX.Element => {
    const [count, setCount] = useState(0)
    
    useLayoutEffect(() => {
        setCount(defaultValue)
    }, [])
    

    const decrease = () => { setCount(count - 1) }
    const increase = () => { setCount(count + 1) }
    const reset = () => { setCount(defaultValue) }

    return (
        <>
            <div className={styles.container}>
                <div className={styles.flex}>
                    <ButtonDanger className={styles.btn} onClick={decrease} text="Decrease" />
                    <p className={styles.text}>{count}</p>
                    <ButtonPrimary className={styles.btn} onClick={increase} text="Increase"/>
                </div>
                <button onClick={reset} className={styles.reset}>Reset</button>
            </div>
        </>
    )
}

export default Counter


