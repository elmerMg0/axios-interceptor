import { useEffect, useState } from 'react'
import './App.css'
import { TestingService } from './services/testing.service'
import { SnackbarProvider } from 'notistack'

function App() {
  const [morty, setMorty] = useState(0)
  useEffect(() => {
    //Manejo de Errorres
    //Si esto falla el componente debe manejar el error
    //si lo metes en un servicio.PARA MOSTAR UN SMS DE ERROR especializado
    try {
    getMorty()
  } catch (error) {
  }
  },[])
  
  const getMorty = async () => {
    const {data} = await TestingService();
    console.log(data)
    setMorty(data)
   
  }
  return (
    <SnackbarProvider>
     {
      JSON.stringify(morty)
     }
    </SnackbarProvider>
  )
}
export default App
