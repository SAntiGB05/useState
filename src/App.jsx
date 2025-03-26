import reactLogo from './assets/react.svg'
import { CountButton } from './components/UI/CountButton/CountButton'
import { ModeButton } from './components/UI/ModeButton/ModeButton'
import { Counter } from './components/layouts/Counter/Counter'
import { ColorGenerator } from './components/layouts/ColorGenerator/ColorGenerator'
import './App.css'

export const App = () => {
  return (
    <>
        <ModeButton />

      <img src={reactLogo} className="logo react" alt="React logo" />
      <h1>UseState </h1>

      <section className='Big-container'>
        <div className='container-section'>
          <h3>Counts Buttons.</h3>
          <div className='container-buttons'>
            <CountButton content={'Likes'}/>
            <CountButton content={'Dislikes'} /> 
          </div>
        </div>

        <div className='container-section'>
            <h3>Absolute Colors.</h3>
            <ColorGenerator />
        </div>

        <div className='container-section'>
            <h3>Counter</h3>
            <Counter />
        </div>
      </section>
    </>
  )
}
