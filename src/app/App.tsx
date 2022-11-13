// import { pokeApi } from '../http'
import { MAPPED_POKE_TYPES } from '../utils'
import './App.css'

import TypeLink from '../components/TypeLink'

const pokeTypes = Array.from(MAPPED_POKE_TYPES.values())

function App() {
  return (
    <div className="App">
      <h1>Poke Stats</h1>

      <ul>
        {pokeTypes.map((type: IPokeTypeStyle) => (
          <TypeLink key={type.name + Date.now()} type={type} />
        ))}
      </ul>
    </div>
  )
}

export default App
