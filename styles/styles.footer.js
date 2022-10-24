import styled from 'styled-components'

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
export const Cardone = styled.div` 
 background-image:url('/grifinoria.png'); 
 width:272px; 
 height:288px; 
 @media (max-width:360px) {
   background-repeat: no-repeat;
   padding: 30px 0;
}
 `
export const Cardtwo = styled.div`
 background-image:url('/sonserina.png'); 
 width:272px; 
 height:288px; 
 @media (max-width:360px) {
   background-repeat: no-repeat;
   padding: 30px 0;
}
 `
export const Cardthree = styled.div` 
 background-image:url('/lufa-lufa.png'); 
 width: 272px; 
 height: 288px; 
 @media (max-width:360px) {
   background-repeat: no-repeat;
   padding: 30px 0;
}
 `
export const Cardfour = styled.div` 
 background-image: url('/corvinal.png'); 
 width: 272px; 
 height: 288px; 
 `
 //Yan