import { Layout } from '@/components/layouts'
import { NoFavorites } from '@/components/ui/NoFavorites'
import React, { useEffect, useState } from 'react'
import { localFavorites } from '@/utils'
import { Container, Grid, Card, Image } from '@nextui-org/react';


 const Favorites = () => {
  const [favoriteList, setFavoriteList] = useState<number[]>([])
  useEffect(()=>{
    setFavoriteList(localFavorites.pokemons())
  },[])
  return (
   <Layout title='Poke-Favorites'>
    {favoriteList.length === 0 ? (
    <NoFavorites/>

    ) : (
      <Grid.Container gap={2} direction='row' justify='flex-start'>
        {
          favoriteList.map(id=>(
            <Grid xs={6} sm={3} md={2} xl={1} key={id}>
<Card hoverable clickable css={{paddig:10}}>
  <Card.Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`} width={'100%'} height={140}/>

</Card>
</Grid>
          ))
        }
      </Grid.Container>
    )
    }
   </Layout>
  )
}
export default Favorites