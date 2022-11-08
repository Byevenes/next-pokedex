import { Grid, Card } from '@nextui-org/react'
import React, { FC } from 'react'
import { FavoriteCardPokemon } from './FavoriteCardPokemon'

type Props = {
  favoritePokemons: number[]
}

export const FavoritePokemons: FC<Props> = ({ favoritePokemons }) => {
  return (
    <Grid.Container direction={'row'} justify={'flex-start'} gap={2}>
      {favoritePokemons.map(id => (
        <FavoriteCardPokemon pokemonId={id} key={id} />
      ))
      }
    </Grid.Container>
  )
}
