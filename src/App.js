import React, { Component } from 'react'
import { Filtro } from './components/Mayara/filtro'
import Header from './components/Gabriel/Header/Header'
import { ContainerPai } from './styled'
import styled from 'styled-components'
import Footer from './components/Gabriel/Footer/Footer'
import MainContainer from './components/Gabriel/MainContainer/MainContainer'



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


