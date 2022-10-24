import styled from "styled-components";

export const Top = styled.div` 
 background: #A6955A; 
 height: 103px; 
 display: flex; 
 justify-content: center; 
 align-items: center; 
 @media  (max-width:360px) {
   height: 200px;
}
 `
export const Logo = styled.img` 
 width: 203px; 
 height: 72px; 
 cursor: pointer;
 @media  (max-width:360px) {
    width: 350px;
   height: 150px;
} 
 `