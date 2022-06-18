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
const Butone = styled.button`
margin: 10px;
`

// const clicado = () => {
//   console.log('botão clicado')
//  }


export default function Card(props) {
  const {cards} = props;
  return (
    <CardStyle>
      <DivImagem>
      <Imagem src={cards.image} 
      alt={cards.name}
      />
      </DivImagem>
       <DivTexto>
       <h3>{cards.name}</h3>
       <div>R${cards.price}</div>
       <Butone onClick={() => props.adicionaCart2(cards.id)}>adicionar ao carrinho</Butone>
       </DivTexto>
    </CardStyle>
  )
}
