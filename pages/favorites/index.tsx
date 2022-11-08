import { GetStaticProps, NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import { pokeApi } from '../../api'
import { Layout } from '../../components/Layout'
import { FavoritePokemons } from '../../components/Pokemon'
import { NoFavorites } from '../../components/Ui'
import { PokemonListResponse, SmallPokemon } from '../../interfaces'
import { localFavorites } from '../../utils'

interface Props {
  pokemons: SmallPokemon[]
}

const Favorites: NextPage<Props> = ({ pokemons }) => {
  const [favoritePokemons, setFavoritePokemons] = useState<SmallPokemon[]>([])

  useEffect(() => {
    const pokeFav = localFavorites.pokemons()

    const pokemonsFav: SmallPokemon[] = pokemons.filter(pokemon => pokeFav.includes(pokemon.id)).map((pokemon, index) => ({
      ...pokemon,
      id: pokemon.id,
      name: pokemon.name
    }))
    setFavoritePokemons(pokemonsFav)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Layout title='Favorites'>
      {favoritePokemons.length === 0
        ? <NoFavorites />
        : <FavoritePokemons favoritePokemons={favoritePokemons} />
      }
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>('pokemon?limit=151')

  const pokemons: SmallPokemon[] = data.results.map((pokemon, index) => ({
    ...pokemon,
    id: index + 1,
    name: pokemon.name
  }))

  return {
    props: {
      pokemons
    }
  }
}

export default Favorites
