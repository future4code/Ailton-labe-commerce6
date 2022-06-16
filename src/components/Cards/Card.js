import React from 'react'
import styled from 'styled-components'


const Imagem = styled.img`
width: 300px;
height: 300px;
border-radius: 16px;
`

const CardStyle = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 320px;
height: 420px;
border: 1px solid black;
border-radius: 16px;
background-color:RoyalBlue ;
padding: 15px 5px;
`

export default function Card() {
  return (
    <CardStyle>
        <Imagem src='https://cdn.discordapp.com/attachments/973359834810441804/986713538187894814/hen-142.jpg' />
       <p>Meteorito</p>
       <h4>preço</h4>
    </CardStyle>
  )
}
