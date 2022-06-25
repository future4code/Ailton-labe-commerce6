import React, { useState } from 'react'
import { ContainerMain } from '../../styled'
import SectionFiltro from './SectionFiltro'
import Card from '../Cards/Card'
import { CardDiv } from '../../styled'
import { SecaoLateral } from '../../styled'
import SectionCarrinho from './SectionCarrinho'
import {SecaoLateralCarrinho} from '../../styled'


export default function MainContainer(props) {
    const {products} = props;
    const arrayProdutosFiltrados = props.products.filter((item)=>{
        if(item.name.toLowerCase().includes(props.valorInputBusca.toLowerCase()) && item.price >= props.valorInputValorMin && item.price <= props.valorInputValorMax ) {
            return item
        }
    })
    return (
        <ContainerMain>

            {props.mostraMore0 && 
            <SecaoLateral>
                <SectionFiltro
                mostraProps0={props.mostraMore} 
                onChangeFiltro={props.onChangeFiltro}
                onChangeBusca={props.onChangeBusca}
                onChangeValorMinimo={props.onChangeValorMinimo}
                onChangeValorMaximo={props.onChangeValorMaximo}
                />
            </SecaoLateral>
}
            <CardDiv>
            {
            arrayProdutosFiltrados.map((cards) => ( 
                <Card key={cards.id}
                cards={cards}
                adicionaCart2={props.adicionaCart1}
                // ordemSelect={props.ordemSelect}
                />
            ))}
                
            </CardDiv>
            {props.mostraCart0 && 
            <SecaoLateralCarrinho>
                <SectionCarrinho
                mostraProps0={props.mostraCart} 
                adicionaCompra2={props.adicionaCompra1}
                adicionaCart1={props.adicionaCart1}
                somaCompra2 ={props.somaCompra1}
                aumentarCarrinho2={props.aumentarCarrinho1}
                removerCarrinho2={props.removerCarrinho1}
                products1={props.products}
                removeItem={props.removeItem}
                removeTudo={props.removeTudo}
                // cartItems={cartItems}erro chato pacarai
                />
            </SecaoLateralCarrinho>
}

        </ContainerMain>
    )
}
