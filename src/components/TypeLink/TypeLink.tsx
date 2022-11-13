import Icon from '../Icon'

interface Props {
  type: IPokeTypeStyle
}

export default function TypeLink({ type }: Props) {
  return <Icon key={type.name + Date.now()} name={type.name} icon={type.icon} />
}
