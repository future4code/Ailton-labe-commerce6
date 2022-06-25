import React from 'react'
import styled from 'styled-components'
import { HeaderContainer, ButaoParagrafo, ButaoFiltro } from '../../styled'
import Logo from '../../img/logo.png'




export default function header(props) {
    return (
        <HeaderContainer>
            <div>
               <img src={Logo} />
            </div>
            <div>
                <ButaoFiltro onClick={props.mostraMore1}>Filtro</ButaoFiltro>
            </div>
            <div>
                <ButaoParagrafo onClick={props.mostraCart}>Carrinho ({props.quantidadeCarrinho})</ButaoParagrafo>
            </div>
        </HeaderContainer>
    )
}
