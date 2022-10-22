import styled from 'styled-components'


export const Content = styled.section` 
 width:1345px; 
 margin:0auto; 
 `
export const Target = styled.div` 
 border: 8px solid #A6955A; 
 @media (max-width:360px) {
    background-color: #A6955A;
    height: 50px;
 }
 `
export const Background = styled.div` 
 background-image:url('/hp-reu-hero22.png'); 
 background-size:cover; 
 background-repeat:no-repeat;
 height:730px; 
 `
export const Logo = styled.img` 
 z-index:1; 
 margin: 120px 0px 0 120px; 
 @media (max-width:360px) {
    height: 500px;
 }
 `
export const BoxBnt = styled.div` 
 margin: 40px 0 0 175px; 
 font-weight: 700px; 
 @media (max-width:360px) {
   display: flex;
   justify-content: center;
   margin: 0;
 }
 `
export const Button = styled.button` 
 font-family:Arial,Helvetica,sans-serif; 
 z-index:1; 
 background-color:#A6955A; 
 width:210px; 
 height:59px; 
 border-radius:10px; 
 border:solid #A6955A; 
 color:#031C29; 
 font-weight: 700;
 text-transform: uppercase;
 cursor:pointer; 
 @media (max-width:360px) {
    margin-top: 100px;
    width: 500px;
    height: 100px;
    font-size: 40px;
 }
 `
export const Main = styled.section` 
 display:flex; 
 justify-content:space-around; 
 align-items:center; 
 margin-top:150px; 
 @media (max-width:360px) {
display: flex;
flex-direction: column;
}
 `
export const LogoMain = styled.div` 
 background-image:url('/hogwarts_shield1.png'); 
 width:72px; 
 height:84px; 
 margin-left:120px; 
 @media (max-width:360px) {
margin: 0;
}
 `
export const Text = styled.p` 
 color:#A6955A; 
 font-size: 24px;
 line-height: 28px;
 @media (max-width:360px) {
    font-size: 50px;
}
 `
export const Border = styled.div` 
 border: 3px solid #A6955A; 
 width:804px; 
 height:0px; 
 margin-left: 36px;
 @media (max-width:360px) {
    border: 3px solid #A6955A; 
    width:360pxpx; 
    height:0px; 

}
 `
export const Cards = styled.section` 
 display:flex; 
 justify-content:space-evenly; 
 margin-top:30px; 
 cursor: pointer;
 @media (max-width:360px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;
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