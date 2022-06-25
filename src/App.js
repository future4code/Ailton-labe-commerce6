import React, { Component } from 'react'
import Header from './components/Header/Header'
import { ContainerPai } from './styled'
import Footer from './components/Footer/Footer'
import MainContainer from './components/MainContainer/MainContainer'
import data from './Data'


export default class App extends Component {
  state = {
    more: false,
    moreCart: false,
    ordemSelect: 'Crescente',
    valorInputBusca: '',
    valorInputValorMin: '',
    valorInputValorMax: Infinity,
    listaCompras: [],
    listaDeProdutos: []
  }


  mostraMore = () => {
    // console.log('passo inicial ', this.state.more)
    this.setState({
      more: !this.state.more
    });
  };

  mostraCart = () => {
    this.setState({
      moreCart: !this.state.moreCart
    });
  }

  adicionaCarrinho = (id) => {
    const { products } = data;
    let produtoAdicionado = products.filter((item) => {
      return id === item.id
    })
    let existe = false
    for (const item of this.state.listaCompras) {
      if (id === item.id) {
        existe = true
      }
    }
    if (existe === false) {
      produtoAdicionado[0] = { ...produtoAdicionado[0], qty: 1 }
      let listaCart = [...this.state.listaCompras, produtoAdicionado[0]]
      this.setState({ listaCompras: listaCart })
    } else {
      const array = this.state.listaCompras.map((item) => {
        if (item.id === id) {
          return {
            id: item.id,
            name: item.name,
            price: item.price,
            image: item.image,
            qty: item.qty + 1
          }
        } else {
          return item
        }
      })
      this.setState({ listaCompras: array })
    }
  };

  removeTudo = (id) => {
    const recebeFiltro = this.state.listaCompras.filter((item) => {
      return item.id !== id
    })
    this.setState({ listaCompras: recebeFiltro })
  }


  removeItem = (products) => {
    if (products.qty > 1) {
      const array = this.state.listaCompras.map((item) => {
        if (item.id === products.id) {
          return {
            id: item.id,
            name: item.name,
            price: item.price,
            image: item.image,
            qty: item.qty - 1
          }
        } else {
          return item
        }
      })
      this.setState({ listaCompras: array })
    } else {
      const arrayRemover = this.state.listaCompras.filter((item) => {
        return products.id !== item.id
      })
      this.setState({ listaCompras: arrayRemover })
    }
  }

  onChangeFiltro = (event) => {
    this.setState({
      ordemSelect: event.target.value
    })
    if (event.target.value === 'Crescente') {
      this.setState({
        listaDeProdutos: this.state.listaDeProdutos.sort((a, b) =>
          a.price - b.price
        )
      })

    }
    if (event.target.value === 'Decrescente') {
      this.setState({
        listaDeProdutos: this.state.listaDeProdutos.sort((a, b) =>
          b.price - a.price
        )
      })
    }
    console.log('alknaeofjh', this.state.listaDeProdutos)
  }

  componentDidMount() {
    const { products } = data;
    let produto = products.filter((item) => {
      return item
    })
    this.setState({ listaDeProdutos: produto })
  }

  onChangeBusca = (event) => {
    this.setState({
      valorInputBusca: event.target.value
    })
  }
  onChangeValorMinimo = (event) => {
    this.setState({
      valorInputValorMin: event.target.value
    })
  }
  onChangeValorMaximo = (event) => {
    if (event.target.value !== '') {
      this.setState({
        valorInputValorMax: event.target.value
      })
    } else {
      this.setState({
        valorInputValorMax: Infinity
      })
    }
  }

  render() {
    const { products } = data;
    console.log(this.state.listaCompras)


    return (
      <ContainerPai>
        <Header
          mostraMore1={this.mostraMore}
          mostraCart={this.mostraCart}
          quantidadeCarrinho={this.state.listaCompras.length}
        />

        <MainContainer
          ordemSelect={this.state.ordemSelect}
          onChangeFiltro={this.onChangeFiltro}
          onChangeBusca={this.onChangeBusca}
          valorInputBusca={this.state.valorInputBusca}
          onChangeValorMinimo={this.onChangeValorMinimo}
          valorInputValorMin={this.state.valorInputValorMin}
          onChangeValorMaximo={this.onChangeValorMaximo}
          valorInputValorMax={this.state.valorInputValorMax}
          mostraMore0={this.state.more}
          mostraCart0={this.state.moreCart}
          products={this.state.listaDeProdutos}
          adicionaCart1={this.adicionaCarrinho}
          adicionaCompra1={this.state.listaCompras}
          somaCompra1={this.somaItem}
          removeTudo={this.removeTudo}
          removeItem={this.removeItem}
        >
        </MainContainer>

        <Footer />
      </ContainerPai>

    )
  }
}


