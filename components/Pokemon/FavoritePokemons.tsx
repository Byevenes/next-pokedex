import { Grid, Card } from '@nextui-org/react'
import React, { FC } from 'react'
import { SmallPokemon } from '../../interfaces'
import { FavoriteCardPokemon } from './FavoriteCardPokemon'

type Props = {
  favoritePokemons: SmallPokemon[]
}

export const FavoritePokemons: FC<Props> = ({ favoritePokemons }) => {
  return (
    <Grid.Container direction={'row'} justify={'flex-start'} gap={2}>
      {favoritePokemons.map(pokemon => (
        <FavoriteCardPokemon pokemon={pokemon} key={pokemon.id} />
      ))
      }
    </Grid.Container>
  )
}
