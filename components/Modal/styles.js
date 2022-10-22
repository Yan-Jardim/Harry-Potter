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
@media (max-width:768px) {
    display: flex;
    justify-content: center;
    margin: 10px 0px 0px 0px;
}
`
export const Content = styled.div`
display: flex;
width: 704px;
height: 453px;
background: #171717;
flex-direction: column;
border-radius: 10px;
@media (max-width:768px) {
 width: 85%;
 height: 90%;
 overflow: auto;
}

`
export const HeaderContent = styled.div`
display: flex;
justify-content: flex-end;
flex-direction: row;
`;

export const MainContent = styled.div`
display: flex;
justify-content: center;
align-items: center;

@media (max-width:768px) {
 flex-direction: column;
}
`;

export const Img = styled.div`
height: 356px;
margin-right: 20px;
@media (max-width:768px) {
margin: 0px;
}
`
export const StyleImg = styled.div`
@media (max-width:768px) {
    width: 100%;
    display: flex;
    justify-content: center;
 img{
    border: 2px solid #A6955A;
 }
}
`
export const Props = styled.div`
font-family: 'Arial';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 30px;
@media (max-width:768px) {
    margin: 30px 50px 0 0;
}
`
export const P = styled.div`
color: #A6955A;
`
export const Color = styled.span`
color: white;
margin-left: 10px;
`
export const Fechar = styled.div`
display: flex;
margin: 10px 10px 20px 0px;
align-items: center;
justify-content: center;
background-color: #A6955A;
border-radius: 50px;
width: 25px;
height: 25px;
color: #031C29;
cursor: pointer;
font-weight: 900;
`
export const Alinhamento = styled.div`
padding: 0px 0px 0px 20px;
`
