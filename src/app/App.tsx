import { useEffect, useState } from 'react'
import { pokeApi } from '../http'
import reactLogo from '../assets/react.svg'
import './App.css'

interface types {
  name: string
}

let firstRender = true

function App() {
  const [count, setCount] = useState(0)
  const [types, setTypes] = useState<types[]>([])

  async function callback() {
    try {
      const response = await pokeApi.get(`type/${count}`)
      setTypes((actualTypes) => {
        actualTypes.push(response.data)
        return actualTypes
      })
    } catch (error) {
      console.info(error)
    }
  }

  useEffect(() => {
    if (firstRender) {
      firstRender = false
      return
    }

    callback()
  }, [count])

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
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
