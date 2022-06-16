import React from "react";
import styled from "styled-components";

const Button = styled.button `
background-color: greenyellow;
color: white;
`



export class Filtro extends React.Component {
    state = {
      more: true
    };
  
    mostraMore = () => {
      this.setState({
        more: !this.state.more
      });
    };
  
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
              <input type="number" min={0} name="minimo" placeholder="Valor Mínimo"/>
              </label>
          </form>
          </p>
            <p>
          <form>
            <label>
             Valor Máximo: 
              <input type="number" name="máximo" max={1000} placeholder="Valor Máximo"/>
            </label>
          </form>
            </p>
          <Button onClick={this.mostraMore}>
            {this.state.more ? "Esconder Filtro" : "Filtro"}
          </Button>
  
          <div>
            {this.state.more && <Filtro />}
            
          </div>
        </div>
      );
    }
  }