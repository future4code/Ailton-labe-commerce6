import React from 'react'
import { HeaderContainer, ButaoParagrafo, ButaoFiltro } from '../../../styled'


export default function header(props) {
    return (
        <HeaderContainer>
            <div>
                <h1>LabStones</h1>
            </div>
            <div>
                <ButaoFiltro onClick={props.mostraMore1} >filtro</ButaoFiltro>
            </div>
            <div>
                <ButaoParagrafo>Carrinho</ButaoParagrafo>
            </div>
        </HeaderContainer>
    )
}
