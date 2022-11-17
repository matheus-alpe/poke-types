import { MAPPED_POKE_TYPES } from '@/utils'
import { useApi } from '@/http'

import TypeLink from '@/components/TypeLink'
import DamageSection from './DamageSection'

interface Props {
  type: IPokeTypeStyle
}

export default function CardBody({ type }: Props) {
  const {
    error,
    loading,
    state: responseType,
  } = useApi<IPokeType>(`type/${type.name}`)

  if (error)
    return (
      <div className="body">
        <span>(Failed to load data)</span>
      </div>
    )

  return (
    <div className="body">
      {loading ? (
        <span>loading</span>
      ) : (
        <DamageSection damageRelations={responseType.damage_relations} />
      )}
    </div>
  )
}
