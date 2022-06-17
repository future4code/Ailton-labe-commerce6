import React from 'react'
import styled from 'styled-components'


const Imagem = styled.img`
/* width: 300px;
height: 300px; */
width: 100%;
height: 100%;
border-top-left-radius: 16px;
border-top-right-radius: 16px;
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
padding: 15px 5px;
color:white;
margin-bottom: 25px;
margin-top: 25px;
`
const DivImagem = styled.div`
height: 100%;
width: 100%;
`
const DivTexto = styled.div`
display: flex;
background-color: white;
color:black;
width: 100%;
opacity:80%;
border-bottom-left-radius: 16px;
border-bottom-right-radius: 16px;
flex-direction: column;
justify-content: center;
align-items: center;
`



export default function Card() {
  return (
    <CardStyle>
      <DivImagem>
      <Imagem src='https://cdn.discordapp.com/attachments/973359834810441804/986713538187894814/hen-142.jpg' />
      </DivImagem>
       <DivTexto>
       <p>Meteorito</p>
       <h4>preço</h4>
       <button>adicionar ao carrinho</button>
       </DivTexto>
    </CardStyle>
  )
}
