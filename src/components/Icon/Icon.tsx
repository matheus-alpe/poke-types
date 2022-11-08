import { POKE_TYPES, useIcon } from '../../utils'

interface Props {
  name: string
}

export default function Icon({ name }: Props) {
  const { error, image, loading } = useIcon(POKE_TYPES[name].icon)

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
