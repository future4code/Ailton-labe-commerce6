import React from 'react'
import { HeaderContainer, ButaoParagrafo, ButaoFiltro } from '../../styled'


export default function header(props) {
    return (
        <HeaderContainer>
            <div>
                <h1>SpaceRocks</h1>
            </div>
            <div>
                <ButaoFiltro onClick={props.mostraMore1}>Filtro</ButaoFiltro>
            </div>
            <div>
                <ButaoParagrafo>Carrinho</ButaoParagrafo>
            </div>
        </HeaderContainer>
    )
}
