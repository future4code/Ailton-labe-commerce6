import React, { Component } from 'react'
import { Filtro } from './components/Filtro/filtro'
import Header from './components/Header/Header'
import { ContainerPai } from './styled'
import styled from 'styled-components'
import Footer from './components/Footer/Footer'
import MainContainer from './components/MainContainer/MainContainer'



export default class App extends Component {
  state = {
    more: false
  };

  mostraMore = () => {
    // console.log('passo inicial ', this.state.more)
    this.setState({
      more: !this.state.more
    });
  };
  render() {
    return (
      <ContainerPai>
        <Header mostraMore1={this.mostraMore} />
      <MainContainer
      mostraMore0={this.state.more}
      />
        <Footer/>
      </ContainerPai>
    )
  }
}


