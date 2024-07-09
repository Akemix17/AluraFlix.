import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import GlobalStyles from "./components/GlobalStyles";
import { Header } from "./components/Header";
import { Formulario } from "./components/Formulario";
import { Section } from "./components/Section";
import { Footer } from "./components/Footer";
import { Banner } from "./components/Banner";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  //Mostrar formulario
  const [mostrarForm, setMostrarForm] = useState(false);
  //Mostrar cards
  const [cards, setCards] = useState([
    {
      id: uuidv4(),
      titulo: "Peace Sign",
      categoria: "Acción",
      link: "",
      imagen: "https://i.ytimg.com/vi/Q7w5IMyJ3pM/maxresdefault.jpg",
      descripcion: "Boku no hero academia OP2",
    },
    {
      id: uuidv4(),
      titulo: "Idol",
      categoria: "Historias de la vida",
      link: "",
      imagen:
        "https://somoskudasai.com/wp-content/uploads/2023/02/oshinoko1.jpg",
      descripcion: "Oshi no ko OP1",
    },
    {
      id: uuidv4(),
      titulo: "Graduation",
      categoria: "Romance",
      link: "",
      imagen:
        "https://www.lavanguardia.com/peliculas-series/images/serie/backdrop/2023/4/w1280/4U5cJTbXBzW1WxDUZErqU3VNNWl.jpg",
      descripcion: "Yamada-kun to Lv999 no Koi wo Suru OP1",
    },
  ]);

  const cambiarMostrar = () => {
    setMostrarForm(!mostrarForm);
  };

  //Lista de categorias
  const categorias = [
    {
      id: uuidv4(),
      titulo: "Acción",
      colorCategory: "#236ab1",
      colorBack: "#236ab186",
    },
    {
      id: uuidv4(),
      titulo: "Comedia",
      colorCategory: "#7caa26",
      colorBack: "#7caa2626",
    },
    {
      id: uuidv4(),
      titulo: "Historias de la vida",
      colorCategory: "#d8d522",
      colorBack: "#d8d52226",
    },
    {
      id: uuidv4(),
      titulo: "Magia",
      colorCategory: "#5f2ed3",
      colorBack: "#5f2ed326",
    },
    {
      id: uuidv4(),
      titulo: "Romance",
      colorCategory: "#b92525",
      colorBack: "#b9252526",
    },
  ];

  //Registrar card
  const registrarCard = (card) => {
    console.log("Nueva tarjeta", card);
    //Uso de spread operator
    setCards([...cards, card]);
  };

  //Eliminar card
  const eliminarCard = (id) => {
    console.log("Eliminar tarjeta", id);
    //Uso de spread operator
    const nuevasCards = cards.filter((card) => card.id != id);
    setCards(nuevasCards);
  };

  return (
    <Router>
          <GlobalStyles />
          <Header cambiarMostrar={cambiarMostrar} />
          <Banner />
          {mostrarForm &&
            <Formulario
              categorias={categorias.map((categoria) => categoria.titulo)}
              registrarCard={registrarCard}
            />
          }
          {categorias.map((categoria) => (
            <Section
              datos={categoria}
              key={categoria.titulo}
              cards={cards.filter(
                (card) => card.categoria === categoria.titulo
              )}
              eliminarCard={eliminarCard}
            />
          ))}
          <Footer />
    </Router>
  );
}

export default App;
