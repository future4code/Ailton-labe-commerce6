import React from "react";
import styled from "styled-components";
import { Inputo } from "../../styled";




export class Filtro extends React.Component {

  // updateMinPreco = (event) => {
  //   this.setState({minPrice: event.target.value})
  // }
  // updadeMaxPreco = (event) => {
  //   this.setState({maxPrice: event.target.value})
  // }
  // updadeQuery = (event) => {
  //   this.setState({query: event.target.value})
  // }

    render() {

      return (

        <div>
      <div>
            <h3>Filtro</h3>
          </div>
          <p>
          <form>
            <label>
              Valor Mínimo: 
              <Inputo type="number" 
              // value={this.state.minPrice}
              min={0} name="minimo" 
              placeholder="Valor Mínimo"/>
              </label>
          </form>
          </p>
            <p>
          <form>
            <label>
             Valor Máximo: 
              <Inputo type="number" 
              // value={this.state.maxPrice}
              name="máximo" max={1000} 
              placeholder="Valor Máximo"/>
            </label>
          </form>
          </p>
          {/* <p>
          <form>
            <label>
             Pesquisa: 
              <Inputo
              value={this.state.query}
              onChange={this.updateQuery}
              placeholder="Pesquisa..."/>
            </label>
          </form>
            </p> */}


          <div>


          </div>
        </div>

      );
    }
  }
