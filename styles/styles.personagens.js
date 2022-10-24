import styled from 'styled-components'

export const Container = styled.div` 
background-image: url('/background_harry_azul_marinho3.png');

 `
export const SizeBack = styled.div` 
 display: flex; 
 justify-content: center; 
 z-index: 0; 
 `
export const Main = styled.section` 
 display: flex; 
 justify-content: space-around; 
 align-items: center; 
 margin-top: 30px; 
 position: absolute; 
 @media  (max-width:360px) {
   display: flex;
   flex-direction: column;
}
 `
export const LogoMain = styled.div` 
 background-image: url('/hogwarts_shield1.png'); 
 width: 72px; 
 height:84px; 
 z-index:999; 
 `
export const BoxText = styled.div` 
 margin-left: 15px; 
 `
export const Text = styled.p`
 color: #A6955A; 
 font-size: 24px; 
 font-weight: 400; 
 text-transform: uppercase;
 @media  (max-width:360px) {
   font-size: 50px;
}
 `
export const Border = styled.div` 
width: 840px;
border: 3px solid #A6955A;
margin-left: 45px;
z-index: 1;
 `
export const CardsCenter = styled.main` 
 display: flex; 
 justify-content: center; 
 margin-top: 200px; 
 margin-left: 80px; 
 @media  (max-width:360px) {
   margin-top: 300px;
 }
 `
export const CardsImg = styled.div` 
 display:flex; 
 flex-wrap:wrap; 
 width: 1267px; 
 `
export const ImgPersonagem = styled.img` 
width: 163px;
height: 227px;
border: 2px solid;
cursor: pointer;
 `
export const Actor = styled.div` 
 color: #A6955A; 
 margin:2rem 1rem; 
 font-weight:600; 
 margin: 2rem; 
 `
export const NamesPersonagens = styled.p` 
display: flex;
cursor: pointer;
justify-content: center;
 `
 //Yan