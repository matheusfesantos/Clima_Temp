import { useRef, useState } from 'react'
import axios from 'axios'
import './App.css'
import WeatherInformations from "./components/WeatherInformation/WeatherInformation.jsx";
import WeatherInformation5Days from "./components/WeatherInformation5days/WeatherInformation5Days.jsx";

function App() {

  const [weather, setWather] = useState()
  const [weather5days, setWather5days] = useState()

  const inputRef = useRef()

  async function searchCity() {

    const city = inputRef.current.value

    if (!city) {
      alert("Por favor, insira o nome da cidade.")
      return
    }

    const key = "3785ecfbe8e2a58742b88d5bbb870302"

    const url =
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&&lang=pt_br&units=metric`

    const url5Days =
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&&lang=pt_br&units=metric`

    const apiInfo = await axios.get(url)

    const apiInfo5Days = await axios.get(url5Days)

    try {
      const apiInfo = await axios.get(url)
      const apiInfo5Days = await axios.get(url5Days)

      setWather5days(apiInfo5Days.data)
      setWather(apiInfo.data)
    } catch (err) {
      alert("Cidade não encontrada ou erro ao buscar dados.")
      setWather(null) // Limpa os dados de clima caso haja erro
      setWather5days(null)
    }

  }

  return (
      <div className= 'container'>

        <div className='text'>
          <h1>Welcome the Clima Temp</h1>
          <h2>a WebApp make in ReactJs</h2>
          <h3>by Matheus Ferreira</h3>
        </div>

        <input ref={inputRef} type='text' placeholder='Digite o nome da Cidade'/>

        <button onClick={searchCity}>Buscar</button>

        {weather && <WeatherInformations weather={weather} />}
        {weather5days && <WeatherInformation5Days weather5days={weather5days}/>}

      </div>
  )
}
export default App