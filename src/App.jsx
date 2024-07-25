import { useNavigate } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Input from './componentes/atoms/Input'
import Button from './componentes/atoms/Button'

function App() {
  
  const navigate = useNavigate();
  const Enter =() =>{

    navigate("/BienvenidoPaco")
  }
  return (
    <>
      <div className='all-app'>
        <div className='img-app'>
          <img src="/Fondo.jpg" alt=""  id='img-ap'/>
        </div>
        <div className='input-app'>
          <Input id="input-ap" text="Correo" type="text"></Input>
          <br></br>
          <br></br>
          <Input id="input-ap" text="Password" type="Password"></Input>
        </div>
        <div className='btn-app'>
          <Button text="Entrar" onClick={Enter}></Button>
        </div>
      </div>
    </>
  )
}

export default App
