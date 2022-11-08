// import { pokeApi } from '../http'
import { MAPPED_POKE_TYPES } from '../utils'
import './App.css'

import Autocomplete from '../components/Autocomplete'
import Icon from '../components/Icon'

const pokeTypes = Array.from(MAPPED_POKE_TYPES.values())

function App() {
  return (
    <div className="App">
      <h1>Poke Stats</h1>

      <Autocomplete />

      <div className="card">
        <ul>
          {pokeTypes.map((type: IPokeTypeStyle) => (
            <li key={type.name + Date.now()}>
              <Icon name={type.name} />
              {type.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App
