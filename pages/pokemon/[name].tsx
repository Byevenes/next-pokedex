import React, { useState } from 'react'

import { Button, Card, Container, Grid, Text } from '@nextui-org/react'
import { NextPage, GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/image'
import { pokeApi } from '../../api'
import { Layout } from '../../components/Layout'
import { Pokemon, PokemonListResponse } from '../../interfaces'
import { getPokemonInfo, localFavorites, useMediaQuery } from '../../utils'
import confetti from 'canvas-confetti'

interface Props {
  pokemon: Pokemon
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {
  const [isPokemonFav, setIsPokemonFav] = useState(localFavorites.isPokemonFav(pokemon.id))
  const isMd = useMediaQuery(960);

  const onToogleFavorite = async () => {
    localFavorites.toggleFavorite(pokemon.id)
    setIsPokemonFav(!isPokemonFav)
    if (isPokemonFav) return;
    confetti({
      zIndex: 999,
      particleCount: 100,
      spread: 160,
      angle: -100,
      origin: {
        x: 1,
        y: 0,
      }
    })
  }

  return (
    <Layout title={pokemon.name}>
      <Grid.Container css={{ mt: '5px' }} gap={2}>
        <Grid xs={12} sm={4}>
          <Card isHoverable css={{ p: '30px' }}>
            <Card.Body>
              <Card.Image
                src={pokemon.sprites.other?.dream_world.front_default || '/no-image.png'}
                alt={pokemon.name}
                width={'100%'}
                height={200}
              />
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={12} sm={8}>
          <Card>
            <Card.Header css={{ display: 'flex', flexDirection: isMd ? 'column' : 'row', justifyContent: 'space-between' }}>
              <Text h1 transform='capitalize'>{pokemon.name}</Text>
              <Button onClick={onToogleFavorite} color={'gradient'} ghost >
                {isPokemonFav ? 'Eliminar de favoritos' : ' Guardar en favoritos'}
              </Button>
            </Card.Header>
            <Card.Body>
              <Text size={30}>Sprites:</Text>

              <Container display='flex' direction='row' justify='space-between'>
                <Image
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.front_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  )
}


export const getStaticPaths: GetStaticPaths = async (ctx) => {

  const { data } = await pokeApi.get<PokemonListResponse>('pokemon?limit=151')

  return {
    paths: data.results.map(({ name }) => ({
      params: { name }
    })),
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { name } = params as { name: string }

  const pokemon = await getPokemonInfo(name)

  if (!pokemon)
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }

  return {
    props: {
      pokemon,
    },
    revalidate: 86400, // 60 * 60 * 24
  }
}

export default PokemonPage


