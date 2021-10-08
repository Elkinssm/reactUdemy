import React, { useEffect } from "react";

function Perfil(props) {
  useEffect(() => {
    document.title = props.atributomio;
  }, [props.atributomio]);

  return (
    <div style={{ background: "yellow" }}>
      Este es mi nuevo componente Perfil{props.atributomio}
    </div>
  );
}

export default Perfil;
