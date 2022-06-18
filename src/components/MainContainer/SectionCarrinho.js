import React from 'react'
import CarrinhoMyllena from '../Carrinho/CarrinhoMyllena'


export default function SectionCarrinho(props) {
  console.log(props)
  return (
    <CarrinhoMyllena mostraProps1={props.mostraCart}
    adicionaCompra3={props.adicionaCompra2}
    />
  )
}
