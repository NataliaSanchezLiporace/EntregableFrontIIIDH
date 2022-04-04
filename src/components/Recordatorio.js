import React from "react";

export default class Recordatorio extends React.Component {
  render() {
    return (
      <div className="recordatorio">
        <h3>Selección anterior: {this.props.seleccionPrevia} </h3>
        <h3>Historial de opciones elegidas: </h3>
        <ul>
          {this.props.Listado.map((element, index) => (
            <li key={index}>{element.toUpperCase()}</li>
          ))}
        </ul>
      </div>
    );
  }
}

