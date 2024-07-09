import React from "react";
import styled from "styled-components";
import { Card } from "./Card";

const SectionStyle = styled.section`
  background-color: #141414;
  .section-title {
    display: inline-block;
    padding: 10px 40px 10px 20px;
    border: 5px solid;
    font-size: 25px;
    margin-left: 20px;
    color: #dad9d9;
  }
  .card-container {
    display: flex;
  }
`;

export const Section = (props) => {
  const { cards, eliminarCard } = props;

  const color = {
    borderColor: props.datos.colorCategory,
  };

  return (
    cards.length > 0 && (
      <SectionStyle>
        <h3 className="section-title" style={color}>
          {props.datos.titulo}
        </h3>
        <div className="card-container">
          {cards.map((card, index) => (
            <Card datos={card} key={index} eliminarCard={eliminarCard}/>
          ))}
        </div>
      </SectionStyle>
    )
  );
};
