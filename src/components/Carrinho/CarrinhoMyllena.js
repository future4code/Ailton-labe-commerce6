import React from 'react'
import styled from 'styled-components'

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
      <h2>Carrinho</h2>
      <div>
        {props.adicionaCompra3.length === 0 ? <div>O carrinho está vazio!</div> : <div>
      {props.adicionaCompra3.map((item) => {
        return <ItemCarrinho>
          <CentralizarDiv>
          <p>{item.name}</p>
          </CentralizarDiv>
          <CentralizarDiv> 
            <button onClick={()=>(props.adicionaCart1(item.id))}>+</button>
            <button onClick={()=>(props.removeItem(item))}>-</button>
          </CentralizarDiv>
          <CentralizarDiv>
            {item.qty} x R${item.price.toFixed(2)}
          </CentralizarDiv>
          <CentralizarDiv>
            <button onClick={()=>(props.removeTudo(item.id))}>Remover Tudo</button>
          </CentralizarDiv>
        </ItemCarrinho>
      })}
      </div>}
      
      </div>
      <div>
      <strong>Valor total:</strong>
              </div>
              <div>
                <strong>${soma}</strong>

                </div>
      </div>
  )
}

 