import styled from "styled-components";
import logo from "../assets/img/logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const HeaderStyle = styled.header`
  width: 100%;
  background-color: #1f2020;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  box-sizing: border-box;
  padding: 0 20px;
  position: fixed;
  z-index: 100;
  img {
    width: 200px;
  }
`;

export const Header = ({ cambiarMostrar }) => {
  //Función mostrar formulario
  const mostrarFormulario = () => {
    const [mostrar, setMostrar] = useState(true);
    setMostrar(!mostrar);
  };

  return (
    <HeaderStyle>
      <img src={logo} />
      <div>
        <button>HOME</button>
        <button onClick={cambiarMostrar}><Link to="/Formulario">NEW</Link></button>
      </div>
    </HeaderStyle>
  );
};
