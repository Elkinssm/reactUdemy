import React, { useState } from "react";
import Perfil from "./componentes/Perfil";

function App() {
  const [nombre, cambiarNombre] = useState("No tiene nombre");

  //Se dispara cada vez que el usuario cambia el texto
  function eventoCajaTexto(e) {
    cambiarNombre(e.target.value);
  }

  return (
    <div>
      <h1>Hola Mundo! {nombre}</h1>
      <input
        name="nombre"
        type="text"
        value={nombre}
        onChange={eventoCajaTexto}
      ></input>
      <Perfil  />
      
    </div>
  );
}

export default App;
