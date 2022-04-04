import React from "react";

export default class Elecciones extends React.Component {
  render() {
    return (
      <div className="opciones">
        <div className="opcion">
          <button id="A" className="botones" onClick={() => this.props.seleccion("a")}>A</button>
          <h2>{this.props.opcionLetra.a}</h2>
        </div>
        <div className="opcion">
          <button id="B" className="botones" onClick={() => this.props.seleccion("b")}>B</button>
          <h2>{this.props.opcionLetra.b}</h2>
        </div>
      </div>
    );
  }
}

