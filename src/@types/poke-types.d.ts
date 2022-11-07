type PokeTypeName =
  | 'bug'
  | 'dark'
  | 'dragon'
  | 'electric'
  | 'fairy'
  | 'fighting'
  | 'fire'
  | 'water'
  | 'flying'
  | 'ghost'
  | 'grass'
  | 'ground'
  | 'ice'
  | 'normal'
  | 'poison'
  | 'psychic'
  | 'rock'
  | 'steel'

interface IReducedPokeType {
  name: PokeTypeName
  url: string
}

interface IDamageRelations {
  double_damage_from: IReducedPokeType[]
  double_damage_to: IReducedPokeType[]
  half_damage_from: IReducedPokeType[]
  half_damage_to: IReducedPokeType[]
  no_damage_from: IReducedPokeType[]
  no_damage_to: IReducedPokeType[]
}

interface IPokeType {
  id: number
  name: PokeTypeName
  damage_relations: IDamageRelations
}

type IPokeTypeColor = {
  [key: PokeTypeName]: string
}
