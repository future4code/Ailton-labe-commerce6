import React from 'react'
import CarrinhoMyllena from '../Carrinho/CarrinhoMyllena'


export default function SectionCarrinho(props) {
  console.log(props)
  return (
    <CarrinhoMyllena mostraProps1={props.mostraCart}
    adicionaCompra3={props.adicionaCompra2}
    somaCompra3 ={props.somaCompra2}
    products2={props.products1}
    adicionaCart1={props.adicionaCart1}
    removeItem={props.removeItem}
    removeTudo={props.removeTudo}
    />
  )
}
