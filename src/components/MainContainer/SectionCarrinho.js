import React from 'react'
import CarrinhoMyllena from '../Carrinho/CarrinhoMyllena'


export default function SectionCarrinho(props) {
  console.log(props)
  return (
    <CarrinhoMyllena mostraProps1={props.mostraCart}
    adicionaCompra3={props.adicionaCompra2}
    somaCompra3 ={props.somaCompra2}
    aumentarCarrinho3={props.aumentarCarrinho2}
    removerCarrinho3={props.removerCarrinho2}
    products2={props.products1}
    />
  )
}
