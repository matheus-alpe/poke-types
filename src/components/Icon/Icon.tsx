import { MAPPED_POKE_TYPES, useIcon } from '../../utils'

interface Props {
  name: PokeTypeName
}

export default function Icon({ name }: Props) {
  const typeStyle = MAPPED_POKE_TYPES.get(name) as IPokeTypeStyle
  const { error, image, loading } = useIcon(typeStyle.icon)

  if (error) return <span>(404 - icon)</span>

  return (
    <>
      {loading ? (
        // TODO: implement loading image
        <span>loading</span>
      ) : (
        <img src={image} className="icon-type" alt={`${name} icon`} />
      )}
    </>
  )
}
