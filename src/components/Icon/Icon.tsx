import './Icon.scss'

interface Props {
  name: String
  type: 'image' | 'icon'
  path?: string
  [attrs: string]: any
}

export default function Icon({ name, type, path, ...attrs }: Props) {
  if (type === 'icon') {
    return (
      <span className="icon material-icons-round" {...attrs}>
        {name}
      </span>
    )
  }

  return (
    <img src={path} className="icon-image" alt={`${name} icon`} {...attrs} />
  )
}
