import styled from 'styled-components'

export const ContainerPai = styled.div`
padding: 0;
margin:0;
display: flex;
flex-direction: column;
min-height: 100vh;
`
export const ContainerMain = styled.div`
display: flex;
border: 1px solid black;
background-color: darkgray;
`

export const HeaderContainer = styled.header`
height: 100px;
border: 1px solid black;
display: flex;
align-items: center;
justify-content: space-between;
padding: 0px 22px;
background-color: dimgray;
color: silver;
`

export const FooterContainer = styled.footer`
height: 100px;
border: 1px solid black;
background-color: black;
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
border: 1px solid black;
padding: 10px;
width: 30%;
justify-content: center;
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

