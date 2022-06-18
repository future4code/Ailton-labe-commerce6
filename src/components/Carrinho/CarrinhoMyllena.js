import React from 'react'


export default function CarrinhoMyllena(props) {
  const {cartItems} = props;
  return (
    <div>
      <h2>Carrinho</h2>
      <div>
      {props.adicionaCompra3.map((item) => {
        return <div>
          <p>{item.name}</p>
          <p>{item.price}</p>
        </div>
      })}
      </div>
      </div>
  )
}

 