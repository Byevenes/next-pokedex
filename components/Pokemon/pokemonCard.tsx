import { Card, Grid, Row, Text } from '@nextui-org/react'
import { useRouter } from 'next/router'
import React, { FC } from 'react'
import { SmallPokemon } from '../../interfaces'

interface Props {
  pokemon: SmallPokemon
}

export const PokemonCard: FC<Props> = ({ pokemon: { id, image, name, url } }) => {
  const { push } = useRouter()

  const handleClick = () => {
    push(`/pokemon/${id}`)
  }

  return (
    <Grid key={id} xs={6} sm={3} md={2} xl={1}>
      <Card onPress={handleClick} isHoverable isPressable css={{ backgroundColor: 'black' }}>
        <Card.Body css={{ p: 2 }}>
          <Card.Image
            src={image}
            width={'100%'}
            height={140}
          />
        </Card.Body>
        <Card.Footer>
          <Row justify='space-between'>
            <Text color='white' transform='capitalize'>{name}</Text>
            <Text color='white'>#{id}</Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  )
}
