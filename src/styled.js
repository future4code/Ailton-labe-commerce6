import styled from 'styled-components'
import fundo from './img/space.png'

export const ContainerPai = styled.div`
padding: 0;
margin:0;
display: flex;
flex-direction: column;
min-height: 100vh;
background-image: url(${fundo});
`
export const ContainerMain = styled.div`
display: flex;
border: 1px solid black;
min-height: 100vh;
`

export const HeaderContainer = styled.header`
height: 100px;
border: 1px solid white;
display: flex;
align-items: center;
justify-content: space-between;
padding: 0px 22px;
color: silver;
`

export const FooterContainer = styled.footer`
height: 100px;
border: 1px solid white;
color:silver;
`

export const CardDiv = styled.div`
display: flex;
justify-content: center;
flex-wrap: wrap;
gap: 12px;
padding: 12px;
`
export const SecaoLateral = styled.div`
border: 1px solid white;
padding: 15px ;
min-width: 250px;
justify-content: center;
color: white;
`
export const SecaoLateralCarrinho = styled.div`
border: 1px solid white;
padding: 15px ;
min-width: 500px;
justify-content: center;
color: white;
`


export const Inputo = styled.input`
border-radius: 10px;
font-size: 18px;
width: 100%;
`

export const ButaoParagrafo =styled.p`
/* border: 1px solid black; */
font-size: 20px;
padding: 4px 8px;
border-radius: 12px;
user-select: none;
outline: none;
background-color: slateblue;
:hover{
    background-color:silver ;
    color: slateblue;
    cursor: pointer;
}:active {
    background-color: aqua;
    box-shadow: 0 5px #666;
    transform: translateY(4px)
}

`
export const ButaoFiltro =styled.p`
/* border: 1px solid black; */
font-size: 20px;
padding: 4px 8px;
border-radius: 12px;
user-select: none;
outline: none;
background-color: slateblue;
:hover{
    background-color:silver ;
    color: slateblue;
    cursor: pointer;
}:active {
    background-color: aqua;
    box-shadow: 0 5px #666;
    transform: translateY(4px)
}
`

