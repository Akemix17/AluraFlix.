import React from "react";
import styled from "styled-components";

const CardStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  padding-left: 20px;
  .card h4 {
    display: inline;
    margin: 10px 0;
    font-size: 25px;
    color: rgb(153, 153, 153);
  }

  .card p {
    color: rgb(39, 247, 150);
  }

  .card img {
    box-sizing: border-box;
    width: 100%;
    height: 170px;
    border: 2px solid white;
  }

  .card-btn {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
  }

  .card-btn button {
    width: 40%;
  }
`;

export const Card = (props) => {

    const {titulo,categoria,url,imagen,descripcion, id}= props.datos

    const{eliminarCard} = props

  return (
    <CardStyle>
      <img
        src={imagen}
      />
      <h4>{titulo}</h4>
      <p>{descripcion}</p>
      <div className="card-btn">
        <button onClick={() => eliminarCard(id)}>DELETE</button>
        <button>EDIT</button>
      </div>
    </CardStyle>
  );
};
