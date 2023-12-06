import { useTheme, Text, Spacer, Link } from '@nextui-org/react'
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router';
import NextLink from 'next/link';


export const NavBar = () => {
    const {theme} = useTheme()

     return (
    <div style={{
        display:'flex',
        width:'100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'start',
        padding:'5px 14px',
        cursor:"pointer",
        backgroundColor:theme?.colors.gray900.value

    }} >
        <Image src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/108.png" alt="icono de la ap" width={60} height={60}/>
        <NextLink href="/" passHref>
       
                    <Text color='white' h3>Pokémon</Text>
            </NextLink>
       
  
        <Spacer css={{flex:1}}/>
        <NextLink  href="/favorites" passHref><Text color='white'size={18} h2>Favoritos</Text></NextLink>
        
    </div>
  )
}
