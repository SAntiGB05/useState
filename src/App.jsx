import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { CountButton } from './components/UI/CountButton/CountButton'
import { ModeButton } from './components/UI/ModeButton/ModeButton'
import './App.css'

export const App = () => {
  return (
    <>
        <ModeButton />

      <img src={reactLogo} className="logo react" alt="React logo" />
      <h1>UseState </h1>

      <div className='like-dislike'>
        <CountButton content={'Likes'}/>
        <CountButton content={'Dislikes'} />
      </div>
      
      

    </>
  )
}
