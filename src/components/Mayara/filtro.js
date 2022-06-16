import React from "react";
import styled from "styled-components";

const Button = styled.button `
background-color: greenyellow;
color: black;
padding: 10px;
width: 150px;
border-radius: 5px;
`
const Input = styled.input `
  width: 150px;
  padding: 12px 10px;
  margin: 6px 0;
  box-sizing: border-box;
  border-radius: 5px;
`


  class Filtro extends React.Component {
    render() {
      return (
        <div>
          <div>
            <p>
          <form>
            <label> Valor Mínimo: <p><Input type="number" min={0} name="minimo" placeholder="digite o valor"/> </p> </label>
          </form>
          </p>
          <p>
          <form>
            <label> Valor Máximo: <p><Input type="number" max={1000} name="maximo" placeholder="digite o valor"/> </p> </label> 
           </form> 
           </p>
     
           </div>
        </div>
      );
    }
  }
  
  
  
  export default class FiltroImportado extends React.Component {
    state = {
      more: false
    };
  
    mostraMore = () => {
      this.setState({
        more: !this.state.more
      });
    };
  
    render() {
      return (
        <div>
           
          <Button onClick={this.mostraMore}>
            {this.state.more ? "Esconder Filtro" : "Filtro"}
          </Button>
  
          <div> {this.state.more && <Filtro />} </div>
        </div>
      );
    }
  }