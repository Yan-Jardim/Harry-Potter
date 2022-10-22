import styled from 'styled-components'

export const back = styled.div`
display: flex;
justify-content: center;
background-color: #031C29;
height: 150vh;
@media (max-width: 360px) {
    flex-direction: column;
    width: 476px ;
    height: 1560px;
}
`
export const Content = styled.section` 
 width:1345px; 
 margin:0auto; 
 @media (max-width:768px) {
    width:476px; 
    height:740px;
    margin: -100px 6px 720px 0;
}
 `
export const Target = styled.div` 
 border: 8px solid #A6955A; 
 `
export const Background = styled.div` 
 background-image:url('/hp-reu-hero22.png'); 
 background-size:cover; 
 background-repeat:no-repeat;
 height:730px; 
 @media  (max-width:768px) {
    width: 360pxpx ;
    height: 740px;
}
 `
export const Logo = styled.img` 
 z-index:1; 
 margin: 120px 0px 0 120px; 
 @media (max-width:768px){
    margin: 30px 0px 0px 60px;
 }
 `
export const BoxBnt = styled.div` 
 margin: 40px 0 0 175px; 
 font-weight: 700px; 
 @media  (max-width:768px) {
    margin: 40px 0 0 140px; 
 }
 `
export const Button = styled.button` 
 font-family:Arial,Helvetica,sans-serif; 
 z-index:1; 
 background-color:#A6955A; 
 width:210px; 
 height:39px; 
 border-radius:10px; 
 border:solid #A6955A; 
 color:#031C29; 
 cursor:pointer; 
 `

export const Main = styled.section` 
 display:flex; 
 justify-content:space-around; 
 align-items:center; 
 margin-top:150px; 
 `
export const LogoMain = styled.div` 
 background-image:url('/hogwarts_shield1.png'); 
 width:72px; 
 height:84px; 
 margin-left:120px; 
 @media  (max-width:768px) {
    margin: 5px;
 }
 `
export const BoxText = styled.div`  
 margin-right:30px; 
 @media  (max-width:768px) {
    margin: 0 ;
    text-transform: uppercase;
 }
 `
export const Text = styled.p` 
 color:#A6955A; 
 font-size:18px; 
 font-weight:400; 
 `
export const Border = styled.div` 
 border: 3px solid #A6955A; 
 width:804px; 
 height:0px; 
 margin-right:50px; 
 @media  (max-width:768px) {
    margin: 0 ;
    width: 100px;
 }
 `
export const Cards = styled.section` 
background-color:#031C29 ;
 display:flex; 
 justify-content:space-evenly; 
 margin-top:150px; 
 margin-top: 40px;
 @media  (max-width:768px) {
    display: flex;
    align-items: center;
    flex-direction: column;
 }
 `
export const Card1 = styled.div` 
 background-image:url('/grifinoria.png'); 
 width:272px; 
 height:288px; 
 `
export const Card2 = styled.div`
 background-image:url('/sonserina.png'); 
 width:272px; 
 height:288px; 
 `
export const Card3 = styled.div` 
 background-image:url('/lufa-lufa.png'); 
 width: 272px; 
 height: 288px; 
 `
export const Card4 = styled.div` 
 background-image: url('/corvinal.png'); 
 width: 272px; 
 height: 288px; 
 `