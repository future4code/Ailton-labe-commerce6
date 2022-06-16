import React from 'react'
import { Filtro } from '../Filtro/filtro'

export default function SectionLateral(props) {
  return (
    <div>
        <Filtro mostraProps1={props.mostraProps}/>
    </div>
  )
}
