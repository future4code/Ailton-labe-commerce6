import React from 'react'


export default function CarrinhoMyllena(props) {
  const {cartItems} = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  return (
    <div>
      <h2>Carrinho</h2>
      <div>
        {props.adicionaCompra3.length === 0 ? <div>O carrinho está vazio!</div> : <div>
      {props.adicionaCompra3.map((item) => {
        return <div>
          <p>{item.name}</p>
          <p>{item.price}</p>
          <div> 
            <button onClick={()=>(props.aumentarCarrinho3)}>+</button>
            <button onClick={()=>(props.removerCarrinho3)}>-</button>
          </div>
          <div>
            {item.qty} x R${item.price.toFixed(2)}
          </div>
        </div>
      })}
      </div>}
      
      </div>
      <div>
      <strong>Valor total:</strong>
              </div>
              <div>
                <strong>${itemsPrice.toFixed(2)}</strong>
                </div>
      </div>
  )
}

 