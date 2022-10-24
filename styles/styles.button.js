import styled from "styled-components";

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