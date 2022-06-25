import React from 'react'
import Filtro from '../Filtro/Filtro'

export default function SectionFiltro(props) {
  return (
    <div>
        <Filtro mostraProps1={props.mostraProps}
        onChangeFiltro={props.onChangeFiltro}
        onChangeBusca={props.onChangeBusca}
        onChangeValorMinimo={props.onChangeValorMinimo}
        onChangeValorMaximo={props.onChangeValorMaximo}
        />
    </div>
  )
}
