// import { pokeApi } from '../http'
import { POKE_TYPES } from '../utils'
import './App.css'

import Autocomplete from '../components/Autocomplete'
import Icon from '../components/Icon'

function App() {
  return (
    <div className="App">
      <h1>Poke Stats</h1>

      <Autocomplete />

      <div className="card">
        <ul>
          {Object.values(POKE_TYPES).map((type: IPokeTypeStyle) => (
            <li key={type.name}>
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
