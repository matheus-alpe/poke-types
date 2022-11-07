import { useEffect, useState } from 'react'
import { pokeApi } from '../http'
import reactLogo from '../assets/react.svg'
import './App.css'

import Autocomplete from '../components/Autocomplete'

let firstRender = true

function App() {
  const [count, setCount] = useState(0)
  const [types, setTypes] = useState<IPokeType[]>([])

  async function callback() {
    try {
      const { data }: { data: IPokeType } = await pokeApi.get(`type/fire`)
      setTypes((actualTypes: IPokeType[]) => {
        actualTypes.push(data)
        return actualTypes
      })
    } catch (error) {
      console.info(error)
    }
  }

  useEffect(() => {
    callback()
  }, [count])

  return (
    <div className="App">
      <div>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      <Autocomplete />

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <ul>
          {types.map((type) => (
            <li key={type.name}>{type.name}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App
