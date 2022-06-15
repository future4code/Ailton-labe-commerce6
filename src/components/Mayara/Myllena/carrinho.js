import React from "react";
import styled from "styled-components";

export const Carrinho = props => {
    return (
      <div className={"carrinho-container"}>
          <header>
              <div>
               <img/>
               <p>Home</p>   
              </div>
          </header>
          <main className="item-carrinho-container">
          <div className="">
              <div>
              <img/>
              </div>
              <p>oi</p> 
              <p>oi</p>        
          </div>
        </main>
        <footer>
            <p>meteoro Ltda</p>
        </footer>
      </div>
    );
  };