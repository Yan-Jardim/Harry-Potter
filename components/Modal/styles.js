import styled from 'styled-components'

export const Container = styled.div`
width: 100vw;
height: 100vh;
position: fixed;
background: rgba(0, 0, 0, 0.3);
top: 0;
left: 0;
display: flex;
justify-content: center;
align-items: center;
z-index: 9999;
`

export const Content = styled.div`
display: flex;
width: 704px;
height: 453px;
background: #171717;
border-radius: 10px;
`
export const Img = styled.div`
margin: 44px 0 0 59px;
`
export const Props = styled.div`
margin: 60px 0px 0 38px;
`
export const P = styled.p`
color: #A6955A;
`
export const Color = styled.span`
color: white;
margin-left: 10px;
`
export const Fechar = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin: 18px 0 0px 118px;
background-color: #A6955A;
border-radius: 50px;
cursor: pointer;
width: 25px;
height: 25px;
`