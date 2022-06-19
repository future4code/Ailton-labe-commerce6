import React from 'react'


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
        return <div>
          <p>{item.name}</p>
          <p>{item.price}</p>
          <div> 
            <button onClick={()=>(props.adicionaCart1(item.id))}>+</button>
            <button onClick={()=>(props.removeItem(item))}>-</button>
          </div>
          <div>
            {item.qty} x R${item.price.toFixed(2)}
          </div>
          <div>
            <button onClick={()=>(props.removeTudo(item.id))}>Remover Tudo</button>
          </div>
        </div>
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

 