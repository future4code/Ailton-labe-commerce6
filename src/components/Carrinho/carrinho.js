import React from "react";
import styled from "styled-components";
import universo from "../img/space.png";

const CarrinhoContainer = styled.div`
height:100vh;
width: 100vw;
background-image: url(${universo});
  width: 100%;
  height: 100%;
`
const MainCarrinho = styled.main`
width: 100%;
height:85vh;
display: flexbox;
justify-content:center;
`
const TelaCarrinho = styled.div`
height:100%;
width: 70%;
background-color:white;
border-radius:20px;
box-shadow: white 5px 5px;
opacity:70%;
`
const Cabecalho = styled.header`
height:10vh;
width: 100%;
color:white;
`
const Rodape = styled.footer`
height:5vh;
width: 100%;
color:white;
`
export const Carrinho = props => {
    return (
      <CarrinhoContainer>
       <Cabecalho>header</Cabecalho>
       <MainCarrinho>
           <TelaCarrinho>
            <div><h1>Carrinho de Compras</h1></div>
            <div>
              <div>{props.img}</div>
              <div>{props.item}</div>
              <div>
                <button>Add</button>
                <button>Remove</button>
                </div>
              </div>
              <div>{props.valorTotal}</div>
              <div></div>
           
           </TelaCarrinho>
       </MainCarrinho>
       <Rodape>footer</Rodape>
      </CarrinhoContainer>
    );
  };
