import React from 'react'
import styled from 'styled-components'
import Fundo from '../../img/space.png'

const ItemCarrinho = styled.div`
display:flex;
color: black;
flex-direction:row;
justify-content: space-between;
background-color: white;
opacity:70%;
border-radius:16px;
margin-bottom:10px;
padding:16px;

` 
const CentralizarDiv = styled.div`
display:flex;
justify-content:center;
align-items:center;
`
const ValorTotal = styled.div`
margin-top: 25px;
display: flex;
flex-direction:row;
align-content: flex-start;
justify-content:center;
font-size: 23px;

`
const Espacinho = styled.div`
margin-left: 15px;
`

const Titulo = styled.div`
display: flex;
justify-content:center;
`
const BotaoAdicionar =styled.button`
background-color: #10b6d3;
border:none;
border-radius:2px;
padding:5px 8px;
font-size:18px;
color:white;
`
const BotaoRemover = styled.button`
background-color:#5016c6;
border:none;
border-radius:2px;
padding:5px 10px;
font-size:18px;
margin-left:2px;
color:white;
`
const RemoverTudo = styled.button`
background: url(${Fundo});
color:white;
border:none;
border-radius:6px;
padding:8px;
`
const EstilizaStrong = styled.strong`
color: slateblue;
`


export default function CarrinhoMyllena(props) {
  // const {cartItems} = props;
  // const itemsPrice = props.adicionaCompra3.reduce((a, c) => a + c.qty * c.price);
  let soma = 0
  for (const items of props.adicionaCompra3) {
    soma = soma + (items.qty * items.price)
  }
  
  console.log('console carti', props.produtos2)
  return (
    <div>
      <Titulo>
      <h1>Carrinho</h1>
      </Titulo>
      <div>
        {props.adicionaCompra3.length === 0 ? <Titulo>O carrinho está vazio!</Titulo> : <div>
      {props.adicionaCompra3.map((item) => {
        return <ItemCarrinho>
          <CentralizarDiv>
          <EstilizaStrong><p>{item.name}</p></EstilizaStrong>
          </CentralizarDiv>
          <CentralizarDiv> 
            <BotaoAdicionar onClick={()=>(props.adicionaCart1(item.id))}>+</BotaoAdicionar>
            <BotaoRemover onClick={()=>(props.removeItem(item))}>-</BotaoRemover>
          </CentralizarDiv>
          <CentralizarDiv>
            <EstilizaStrong>{item.qty} x R${item.price.toFixed(2)}</EstilizaStrong>
          </CentralizarDiv>
          <CentralizarDiv>
            <RemoverTudo onClick={()=>(props.removeTudo(item.id))}>Remover Tudo</RemoverTudo>
          </CentralizarDiv>
        </ItemCarrinho>
      })}
      </div>}
      
      </div>
      <ValorTotal>
      <div>
      <strong>Valor total:</strong>
              </div>
              <Espacinho>
                <strong>R${soma}</strong>
                </Espacinho>
                </ValorTotal>
      </div>
  )
}

 