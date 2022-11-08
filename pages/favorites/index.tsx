import { NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import { Layout } from '../../components/Layout'
import { FavoritePokemons } from '../../components/Pokemon'
import { NoFavorites } from '../../components/Ui'
import { localFavorites } from '../../utils'

const Favorites: NextPage = () => {
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([])

  useEffect(() => {
    setFavoritePokemons(localFavorites.pokemons())
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

export default Favorites
