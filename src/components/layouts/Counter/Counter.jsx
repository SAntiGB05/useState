import { useState, useEffect } from "react"
import "./Counter.css"

export const Counter = () => {
  const [count, setCount] = useState(0)
  const [running, setRunning] = useState(false)

  useEffect(() => {
    let interval
    if (running) {
      interval = setInterval(() => {
        setCount(prevCount => prevCount + 1)
      }, 1000);
    } else {
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [running]);

  return (
    <div className="counter-container">
      <h3>Tiempo: {count} segundos</h3>
      <button className="counter-button start" onClick={() => setRunning(true)}>Iniciar</button>
      <button className="counter-button stop" onClick={() => { setRunning(false); setCount(0); }}>Parar</button>
    </div>
  )
}
