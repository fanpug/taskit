import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import InputField from './components/InputField'

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");

  return (
    <div className='App'>
      <span className='heading'>TaskIt</span>
      <InputField todo={todo} setTodo={setTodo} />
    </div>
  )
}

export default App
