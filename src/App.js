import React, { Component } from 'react'
import { Filtro } from './components/Filtro/filtro'
import Header from './components/Header/Header'
import { ButaoParagrafo, ContainerPai } from './styled'
import styled from 'styled-components'
import Footer from './components/Footer/Footer'
import MainContainer from './components/MainContainer/MainContainer'
import { Carrinho } from './components/Carrinho/carrinho'

export class Home extends React.Component {
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
        <Header> mostraMore1={this.mostraMore}
          <ButaoParagrafo onClick={this.props.goCarrinho}/>
        </Header>
      <MainContainer
      mostraMore0={this.state.more}
      />
        <Footer/>
      </ContainerPai>
    )
  }
}

export class CarrinhoCompras extends React.Component{

  render(){
    return(
      <Carrinho> goHome={this.props.goHome} 
      <Cabecalho> <button onClick={this.props.goHome}>Home</button></Cabecalho>
      </Carrinho>
    )
  }
}

export default class App extends Component {
  state = {
    tela:"home"
  };
  
  goCarrinho = () => {
    this.setState({
      tela: "carrinho"
    });
  };

  goHome = () => {
    this.setState({
      tela: "home"
    });
  };
  escolheTela = () => {
    switch (this.state.tela) {
      case "home":
        return <Home goCarrinho={this.goCarrinho} />;
        break;
      case "carrinho":
        return <CarrinhoCompras goHome={this.goHome} />;
        break;
    }
  };

  render() {
      return <div>{this.escolheTela()}</div>;
   
  }
}


