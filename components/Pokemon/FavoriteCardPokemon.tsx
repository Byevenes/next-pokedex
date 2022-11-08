import { Grid, Card } from '@nextui-org/react'
import { useRouter } from 'next/router'
import React, { FC } from 'react'
import { SmallPokemon } from '../../interfaces'

type Props = {
  pokemon: SmallPokemon
}

export const FavoriteCardPokemon: FC<Props> = ({ pokemon: { id, name } }) => {
  const { push } = useRouter()

  const handleClick = () => {
    push(`/pokemon/${name}`)
  }
  return (
    <Grid xs={6} sm={4} md={2} xl={1} key={id} onClick={handleClick}>
      <Card isHoverable isPressable css={{ p: 10 }}>
        <Card.Body>
          <Card.Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
            alt={'pokemon'}
            width={'100%'}
            height={200}
          />
        </Card.Body>
      </Card>
    </Grid>
  )
}
