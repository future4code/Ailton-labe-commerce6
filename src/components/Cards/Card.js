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
width: 280px;
height: 380px;
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
const Butone = styled.p`
margin:10px;
font-size: 15px;
 color:white;
font-weight: bold;
padding: 4px 8px;
border-radius: 12px;
user-select: none;
outline: none;
background-color: slateblue;
:hover{
    background-color:silver ;
    color: slateblue;
    cursor: pointer;
}:active {
    background-color: aqua;
    box-shadow: 0 5px #666;
    transform: translateY(4px)
}
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
