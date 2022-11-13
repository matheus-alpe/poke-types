import { Link } from 'react-router-dom'
import Icon from '../Icon'

interface Props {
  type: IPokeTypeStyle
}

export default function TypeLink({ type }: Props) {
  const URL = `/types/${type.name}`

  return (
    <Link to={URL}>
      <Icon key={type.name + Date.now()} name={type.name} icon={type.icon} />
    </Link>
  )
}
