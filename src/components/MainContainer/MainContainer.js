import React, { useState } from 'react'
import { ContainerMain } from '../../styled'
import SectionFiltro from './SectionFiltro'
import Card from '../Cards/Card'
import { CardDiv } from '../../styled'
import { SecaoLateral } from '../../styled'
import SectionCarrinho from './SectionCarrinho'



export default function MainContainer(props) {
    const {products} = props;
    // const [cartItems , setCartItems] = useState([])
    return (
        <ContainerMain>

            {props.mostraMore0 && 
            <SecaoLateral>
                <SectionFiltro
                mostraProps0={props.mostraMore} 
                onChangeFiltro={props.onChangeFiltro}
                />
            </SecaoLateral>
}
            <CardDiv>
            {
            products.map((cards) => ( 
                <Card key={cards.id}
                cards={cards}
                adicionaCart2={props.adicionaCart1}
                // ordemSelect={props.ordemSelect}
                />
            ))}
                
            </CardDiv>
            {props.mostraCart0 && 
            <SecaoLateral>
                <SectionCarrinho
                mostraProps0={props.mostraCart} 
                adicionaCompra2={props.adicionaCompra1}
                somaCompra2 ={props.somaCompra1}
                aumentarCarrinho2={props.aumentarCarrinho1}
                removerCarrinho2={props.removerCarrinho1}
                products1={props.products}
                // cartItems={cartItems}erro chato pacarai
                />
            </SecaoLateral>
}

        </ContainerMain>
    )
}
