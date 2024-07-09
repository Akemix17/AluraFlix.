import { useState } from "react";
import React from "react";
import styled from "styled-components";

//Style del formulario
const FormStyle = styled.section`
  display: flex;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    width: 50%;
    padding: 20px;
    color: rgb(255, 255, 255);
    background-color: black;
    border: solid 5px rgb(26, 97, 53);
    box-shadow: 0px 0px 15px 10px rgb(3, 3, 3);
  }
`;

//Componentes inputs del formulario
const CampoTexto = (props) => {
  const placeholderM = `${props.placeholder}...`;

  //Actualizar de los input
  const [valor, setValor] = useState("");

  const hacerCambio = (e) => {
    props.setValor(e.target.value);
  };
  return (
    <>
      <label>{props.titulo}</label>
      <input
        placeholder={props.placeholderM}
        required={props.required}
        value={props.valor}
        onChange={hacerCambio}
      />
    </>
  );
};

//Componente lista de categoria
const ListaCategorias = (props) => {
  //Lista de categorias
  const categorias = ["Acción", "Comedia", "Historias de la vida","Magia", "Romance"];

  const elegirCategoria = (e) => {
    console.log("cambio",e.target.value);
    props.setCategoria(e.target.value);
  };

  return (
    <>
      <label>{props.titulo}</label>
      <select value={props.valor} onChange={elegirCategoria}>
        <option value="" disabled defaultValue="" hidden>Selecciona categoria</option>
        {props.categorias.map((categoria, index) => {
          return <option key={index} value={categoria}>{categoria}</option>;
        })}
      </select>
    </>
  );
};

//Componente descripción
const Descripcion = (props) => {
  const [valor, setValor] = useState("");

  const hacerCambio = (e) => {
    props.setValor(e.target.value);
  };
  return (
    <>
      <label>{props.titulo}</label>
      <textarea
        placeholder={props.placeholder}
        required
        value={props.valor}
        onChange={hacerCambio}
      ></textarea>
    </>
  );
};

//Componente boton crear y limpiar
const BtnsFormulario = ({ submit, limpiar }) => {
  return (
    <>
      <button>{submit}</button>
      <button type="reset">{limpiar}</button>
    </>
  );
};

//Componente Formulario
export const Formulario = (props) => {
  //Almacenar valores del formulario
  const [titulo, setTitulo] = useState("");
  const [categoria, setCategoria] = useState("");
  const [url, setUrl] = useState("");
  const [imagen, setImagen] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const {registrarCard} = props

  //Envio de Formulario
  const enviarFormulario = (e) => {
    //Previene que la página recargue
    e.preventDefault();
    console.log("Formulario enviado");
    //Crear un objeto con los datos ingresados
    let datosAEnviar = {
      titulo,
      categoria,
      url,
      imagen,
      descripcion,
    };
    registrarCard(datosAEnviar);
  };

  return (
    <FormStyle>
      <form onSubmit={enviarFormulario}>
        <div className="form-text">
          <h2>NUEVO VIDEO</h2>
          <hr />
          <p>Completa el formulario para añadir un nuevo OP</p>
          <h3>Crear Tarjeta</h3>
        </div>
        <CampoTexto
          titulo="Titulo:"
          placeholder="Titulo la canción"
          required
          valor={titulo}
          setValor={setTitulo}
        />
        <ListaCategorias
          titulo="Categoria:"
          valor={categoria}
          setCategoria={setCategoria}
          categorias={props.categorias}
        />
        <CampoTexto
          titulo="Url:"
          placeholder="Url del video"
          required
          valor={url}
          setValor={setUrl}
        />
        <CampoTexto
          titulo="Imagen:"
          placeholder="Link de la imagen previa"
          required
          valor={imagen}
          setValor={setImagen}
        />
        <Descripcion
          titulo="Descripción:"
          placeholder="Descripción del video"
          required
          valor={descripcion}
          setValor={setDescripcion}
        />
        <BtnsFormulario submit="Crear" limpiar="Limpiar" />
      </form>
    </FormStyle>
  );
};
