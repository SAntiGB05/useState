import './CountButton.css'
import { useState } from 'react'

export const CountButton = ({content}) => {
    const [count, setCount] = useState(0)

    return(
        <>
            <div className='card'>
                <button onClick={() => setCount((count) => count + 1)}> {content} {count}</button>
            </div>
        </>
    )
}
