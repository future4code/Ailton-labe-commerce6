import React from "react";
import styled from "styled-components";
import { Inputo } from "../../styled";




export class Filtro extends React.Component {

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
              <Inputo type="number" min={0} name="minimo" placeholder="Valor Mínimo" />
            </label>
          </form>
        </p>
        <p>
          <form>
            <label>
              Valor Máximo:
              <Inputo type="number" name="máximo" max={1000} placeholder="Valor Máximo" />
            </label>
          </form>
        </p>
        <div>
        </div>
      </div>

    );
  }
}