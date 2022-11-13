import './TypeGrid.scss'
import { MAPPED_POKE_TYPES } from '../../utils'

import TypeLink from '../TypeLink'

const pokeTypes = Array.from(MAPPED_POKE_TYPES.values())

export default function TypeGrid() {
  return (
    <ul className="type-grid">
      {pokeTypes.map((type: IPokeTypeStyle) => (
        <TypeLink key={type.name + Date.now()} type={type} />
      ))}
    </ul>
  )
}
