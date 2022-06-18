import React from "react";
import { Inputo } from "../../styled";




export class Filtro extends React.Component {

  // state = {
  //   produtos: listaProdutos,
  //   query:'',
  //   minPrice:'',
  //   maxPrice:'',
  //   parametroSort:'',
  //   ordem: 1,
  // }

  // updateMinPreco = (event) => {
  //   this.setState({minPrice: event.target.value})
  // }
  // updadeMaxPreco = (event) => {
  //   this.setState({maxPrice: event.target.value})
  // }
  // updadeQuery = (event) => {
  //   this.setState({query: event.target.value})
  // }

  // updateParametroSort = (event) => {
  //   this.setState({parametroSort: event.target.value})
  // }
  // updateOrdem = (event) => {
  //   this.setState({ordem: event.target.value})
  // }

    render() {

      return (

        <div>
      {/* <Parametros
      query={this.state.query}
      updateQuery={this.state.updadeQuery}
      updateMinPreco={this.state.updateMinPreco}
      updadeMaxPreco={this.state.updadeMaxPreco}
      updateParametroSort={this.state.updateParametroSort}
      updateOrdem={this.state.updateOrdem}
      minPrice={this.state.minPrice}
      maxPrice={this.state.maxPrice}
      parametroSort={this.state.parametroSort}
      ordem={this.state.ordem}
      />

      <ContainerPesquisa>
        {this.state.produtos
        .filter(produto => {
          return produto.title.toLowerCase().includes(this.state.query.toLowerCase())                
        })
        .filter(produto => {
          return this.state.minPrice === "" || produto.price >= this.state.minPrice
        })
        .filter(produto => {
          return this.state.maxPrice === "" || produto.price >= this.state.maxPrice
        })
        .sort((atualProduto, proximoProduto) => {
          switch (this.state.parametroSort) {
            case "crescente": 
              return this.state.ordem * atualProduto.title.localeCompare(proximoProduto.title)
            case "descrescente": 
              return this.state.ordem * (new Date(atualProduto.crescente).getTime() - new Date(proximoProduto.proximoProduto).getTime())
              default:
                        return this.state.ordem * (atualProduto.price - proximoProduto.price)
          }
        })
        .map(produtos => {
          return <Card key={produtos.id} produtos={produtos} />
        })}
        
      </ContainerPesquisa> */}

            <h3>Filtro</h3>
           <p> <form>
            <label>
              Valor Mínimo: 
              <Inputo type="number" value={this.state.minPrice} min={0} name="minimo"  placeholder="Valor Mínimo"/>
              </label>
          </form> </p>
         <p> <form>
            <label>
             Valor Máximo: 
              <Inputo type="number"  value={this.state.maxPrice} name="máximo" max={1000} placeholder="Valor Máximo"/>
            </label>
          </form> </p>
          
          <p> <form>
            <label>
             Pesquisa: 
              <Inputo
              value={this.state.query} onChange={this.updateQuery} placeholder="Pesquisa..."/>  
            </label>
          </form> </p>
          <div>
            {/* <LinkarComCardDosProdutos /> */}

          </div>
        </div>

      );
    }
  }
