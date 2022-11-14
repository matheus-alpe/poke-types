import bugIcon from '../assets/icons/icon_bug.png'
import darkIcon from '../assets/icons/icon_dark.png'
import dragonIcon from '../assets/icons/icon_dragon.png'
import electricIcon from '../assets/icons/icon_electric.png'
import fairyIcon from '../assets/icons/icon_fairy.png'
import fightingIcon from '../assets/icons/icon_fighting.png'
import fireIcon from '../assets/icons/icon_fire.png'
import flyingIcon from '../assets/icons/icon_flying.png'
import ghostIcon from '../assets/icons/icon_ghost.png'
import grassIcon from '../assets/icons/icon_grass.png'
import groundIcon from '../assets/icons/icon_ground.png'
import iceIcon from '../assets/icons/icon_ice.png'
import normalIcon from '../assets/icons/icon_normal.png'
import poisonIcon from '../assets/icons/icon_poison.png'
import psychicIcon from '../assets/icons/icon_psychic.png'
import rockIcon from '../assets/icons/icon_rock.png'
import steelIcon from '../assets/icons/icon_steel.png'
import waterIcon from '../assets/icons/icon_water.png'

export const MAPPED_POKE_TYPES = new Map<PokeTypeName, IPokeTypeStyle>([
  [
    'bug',
    {
      name: 'bug',
      color: '#a8c746',
      icon: bugIcon,
    },
  ],
  [
    'dark',
    {
      name: 'dark',
      color: '#6d7381',
      icon: darkIcon,
    },
  ],
  [
    'dragon',
    {
      name: 'dragon',
      color: '#0c81b9',
      icon: dragonIcon,
    },
  ],
  [
    'electric',
    {
      name: 'electric',
      color: '#f9de75',
      icon: electricIcon,
    },
  ],
  [
    'fairy',
    {
      name: 'fairy',
      color: '#f2a7e2',
      icon: fairyIcon,
    },
  ],
  [
    'fighting',
    {
      name: 'fighting',
      color: '#e14751',
      icon: fightingIcon,
    },
  ],
  [
    'fire',
    {
      name: 'fire',
      color: '#feac58',
      icon: fireIcon,
    },
  ],
  [
    'flying',
    {
      name: 'flying',
      color: '#a4bfeb',
      icon: flyingIcon,
    },
  ],
  [
    'ghost',
    {
      name: 'ghost',
      color: '#7972d1',
      icon: ghostIcon,
    },
  ],
  [
    'grass',
    {
      name: 'grass',
      color: '#5cc27d',
      icon: grassIcon,
    },
  ],
  [
    'ground',
    {
      name: 'ground',
      color: '#d4966b',
      icon: groundIcon,
    },
  ],
  [
    'ice',
    {
      name: 'ice',
      color: '#8fdad4',
      icon: iceIcon,
    },
  ],
  [
    'normal',
    {
      name: 'normal',
      color: '#a4a49f',
      icon: normalIcon,
    },
  ],
  [
    'poison',
    {
      name: 'poison',
      color: '#c362d0',
      icon: poisonIcon,
    },
  ],
  [
    'psychic',
    {
      name: 'psychic',
      color: '#fca199',
      icon: psychicIcon,
    },
  ],
  [
    'rock',
    {
      name: 'rock',
      color: '#d5ca96',
      icon: rockIcon,
    },
  ],
  [
    'steel',
    {
      name: 'steel',
      color: '#57a8a9',
      icon: steelIcon,
    },
  ],
  [
    'water',
    {
      name: 'water',
      color: '#6ebee0',
      icon: waterIcon,
    },
  ],
])
