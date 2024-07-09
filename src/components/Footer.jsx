import React from 'react'
import logo from "../assets/img/logo.png"
import styled from 'styled-components'

const FooterStyle = styled.footer`
display: flex;
flex-direction:column;
width: 100%;
background-color: #1f2020;
align-items:center;
padding:20px 0;
justify-content:center;

.footer-logo{
    width: 100px;
    margin:0;
}

h5{
    display:inline;
    color: #fff;
    padding:0;
    margin:0;
    text-align: center;
}
`

export const Footer = () => {
  return (
    <FooterStyle>
        <img className="footer-logo"src={logo}/>
        <h5><hr/>Creada por Pamela Campos<br/>2024</h5>
    </FooterStyle>
  )
}
