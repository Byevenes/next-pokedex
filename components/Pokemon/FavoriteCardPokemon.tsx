import { Grid, Card } from '@nextui-org/react'
import { useRouter } from 'next/router'
import React, { FC } from 'react'

type Props = {
  pokemonId: number
}

export const FavoriteCardPokemon: FC<Props> = ({ pokemonId }) => {
  const { push } = useRouter()

  const handleClick = () => {
    push(`/pokemon/${pokemonId}`)
  }
  return (
    <Grid xs={6} sm={4} md={2} xl={1} key={pokemonId} onClick={handleClick}>
      <Card isHoverable isPressable css={{ p: 10 }}>
        <Card.Body>
          <Card.Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
            alt={'pokemon'}
            width={'100%'}
            height={200}
          />
        </Card.Body>
      </Card>
    </Grid>
  )
}
