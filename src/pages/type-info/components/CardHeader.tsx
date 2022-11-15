import Icon from '../../../components/Icon'

interface Props {
  type: IPokeTypeStyle
}

export default function CardHeader({ type }: Props) {
  return (
    <div className="header">
      <Icon type="image" name={type.name} path={type.icon} />
      <h2>{type.name.toUpperCase()}</h2>
    </div>
  )
}
