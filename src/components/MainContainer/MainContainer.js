import React, { useState } from 'react'
import { ContainerMain } from '../../styled'
import SectionLateral from './SectionFiltro'
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
                <SectionLateral
                mostraProps0={props.mostraMore} />
            </SecaoLateral>
}
            <CardDiv>
            {products.map((cards) => (
                <Card key={cards.id}
                cards={cards}
                adicionaCart2={props.adicionaCart1}
        
                />
            ))}
                
            </CardDiv>
            {props.mostraMore0 && 
            <SecaoLateral>
                <SectionCarrinho
                mostraProps0={props.mostraCart} 
                adicionaCompra2={props.adicionaCompra1}
                // cartItems={cartItems}erro chato pacarai
                />
            </SecaoLateral>
}

        </ContainerMain>
    )
}
