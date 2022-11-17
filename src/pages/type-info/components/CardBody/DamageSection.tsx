import { MAPPED_POKE_TYPES } from '@/utils'

import TypeLink from '@/components/TypeLink'

function DamageItem({ reducedType }: { reducedType: IReducedPokeType }) {
  const type = MAPPED_POKE_TYPES.get(reducedType.name)
  if (!type) return <></>
  return (
    <div className="damage-item">
      <TypeLink type={type} key={type.name} />
    </div>
  )
}

function ListDamage({
  title,
  reducedTypes,
}: {
  title: string
  reducedTypes: IReducedPokeType[]
}) {
  return (
    <div className="damage-list">
      <p>{title}</p>
      <ul>
        {reducedTypes.map((reducedType) => (
          <DamageItem reducedType={reducedType} key={reducedType.name} />
        ))}
      </ul>
    </div>
  )
}

export default function DamageSection({
  damageRelations,
}: {
  damageRelations: IDamageRelations
}) {
  return (
    <div className="damage-section">
      <ListDamage
        title="Double damage to:"
        reducedTypes={damageRelations.double_damage_to}
      />

      <ListDamage
        title="Half damage to:"
        reducedTypes={damageRelations.half_damage_to}
      />

      <ListDamage
        title="No damage to:"
        reducedTypes={damageRelations.no_damage_to}
      />

      <ListDamage
        title="Double damage from:"
        reducedTypes={damageRelations.double_damage_from}
      />

      <ListDamage
        title="Half damage from:"
        reducedTypes={damageRelations.half_damage_from}
      />

      <ListDamage
        title="No damage from:"
        reducedTypes={damageRelations.no_damage_from}
      />
    </div>
  )
}
