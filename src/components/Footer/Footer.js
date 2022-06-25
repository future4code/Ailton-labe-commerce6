import React from 'react'
import { FooterContainer } from '../../styled'
import Git from '../../img/gitHub.png'
import styled from 'styled-components'
import Whats from '../../img/whatsapp.svg'
import Face from '../../img/facebook1.svg'
import Insta from '../../img/instagram1.svg'


const DivPai = styled.div`
display:flex;
flex-direction:row;
justify-content:flex-start;
`
const DivAmigos = styled.div`
margin-left:20px;
`


export default function Footer() {
  return (
    <FooterContainer>
      <div>
 <h4>Desenvolvedores</h4>
      <DivPai>
      <DivAmigos>
         <a href='https://github.com/GabeSales' target={'_blank'}><img src={Git}/></a> 
          <div>
          <p>Gabriel Sales</p>
          </div>
        </DivAmigos>
        <DivAmigos>
        <a href='https://github.com/aonosorah' target={'_blank'}><img src={Git}/></a> 
          <div> 
          <p>Mayara Costa</p>
          </div>
        </DivAmigos>
        <DivAmigos>
        <a href='https://github.com/Myllenam' target={'_blank'}><img src={Git}/></a> 
          <div>
          <p>Myllena Miranda</p>
          </div>
        </DivAmigos>
      </DivPai>
      </div>
      <div>
        <h4>Informações</h4>
        <p>Telefone:(11) 3645-2522</p>
        <p>E-mail: spaceRocks@spaceRocks.com</p>
        <p>Projeto Labenu</p>
      </div>
      <div>
        <h4>Siga-nos nas Redes Sociais</h4>
        <div>
     
       <a href='https://www.instagram.com/' target={'_blank'}><img src={Insta}/></a> 
      
        <a href='https://www.whatsapp.com/?lang=pt_br' target={'_blank'}><img src={Whats}/></a>
       
        <a href='https://pt-br.facebook.com/' target={'_blank'}><img src={Face}/></a>
       
        </div>
      </div>
    </FooterContainer>
  )
}
