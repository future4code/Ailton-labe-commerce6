import React from 'react'
import { ContainerMain } from '../../../styled'
import SectionLateral from './SectionLateral'
import Card from '../Cards/Card'
import { CardDiv } from '../../../styled'
import { SecaoLateral } from '../../../styled'

export default function MainContainer(props) {
    return (
        <ContainerMain>
            {props.mostraMore0 && 
            <SecaoLateral>
                <SectionLateral
                mostraProps0={props.mostraMore} />
            </SecaoLateral>
}
            <CardDiv>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </CardDiv>
        </ContainerMain>
    )
}
