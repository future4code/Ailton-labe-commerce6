import React, { Component } from 'react'
import Header from './components/Header/Header'
import { ContainerPai } from './styled'
import Footer from './components/Footer/Footer'
import MainContainer from './components/MainContainer/MainContainer'
import data from './Data'


export default class App extends Component {
  state = {
    more: false,
    listaCompras: [],
  }
  
  
  mostraMore = () => {
    // console.log('passo inicial ', this.state.more)
    this.setState({
      more: !this.state.more
    });
  };
  
  mostraCart = () => {
    this.setState({
      more: !this.state.more
    });
  }

  adicionaCarrinho = (id) => {
    const {products} = data;
    // console.log("botão adicionar carrinho clicado")
    const produtoAdicionado = products.filter((item) => {
      // console.log(item)
      return id === item.id
    })
    const carrinho = [...this.state.listaCompras, produtoAdicionado[0]]
    this.setState({
      listaCompras: carrinho
    })
  }
  
  render() {
    // const [cartItems , setCartItems] = useState([])
    const {products} = data;
 console.log(this.state.listaCompras)
    return (
      <ContainerPai>
        <Header 
        mostraMore1={this.mostraMore}
        mostraCart={this.mostraCart}
        />
        
      <MainContainer
      mostraMore0={this.state.more}
      products={products}
      adicionaCart1={this.adicionaCarrinho} 
      adicionaCompra1={this.state.listaCompras}
      >
      </MainContainer>

        <Footer/>
      </ContainerPai>
      
    )
  }
}


