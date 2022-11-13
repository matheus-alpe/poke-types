import { useIcon } from '../../utils'

interface Props {
  name: String
  icon: string
}

export default function Icon({ name, icon }: Props) {
  const { error, image, loading } = useIcon(icon)

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
