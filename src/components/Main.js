import React from "react";
import Historia from "./Historia";
import Elecciones from "./Elecciones";
import Recordatorio from "./Recordatorio";
import data from "./data.json";

export default class Main extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
      id: 1,
      texto: data.find((element) => element.id === "1"),
      ultimaSeleccion: "",
      Listado: [],
    };
    this.handleDeOpciones = this.handleDeOpciones.bind(this);
   
  }

  componentDidUpdate( prevState) {
      if (prevState.id !== this.state.id && this.state.seleccionPrevia !== "") {
      this.state.Listado.push(this.state.seleccionPrevia);
    }
  }

  handleDeOpciones(opcion) {
    if (this.state.texto.opciones[opcion] === "FIN.") {
      let avisoFin = alert('Fin.');
      if (avisoFin){
          this.setState({
          id: 1,
          texto: data.find((element) => element.id === "1"),
          seleccionPrevia: "",
          Listado: [],
        });
      } 
    } else { 
      let nuevoId = parseInt(this.state.id) + 1;
      this.setState({
        id: nuevoId,
        texto: data.find((element) => element.id === `${nuevoId}${opcion}`),
        seleccionPrevia: opcion.toUpperCase(),
        
      });
  }
}
handleReinicio = () => {
  this.setState({ id: 1, Listado: [] });
};




  render() {
    return (
      <div className="layout">
        <Historia textoHistoria={this.state.texto.historia} />
        <Elecciones
          seleccion={this.handleDeOpciones}
          opcionLetra={this.state.texto.opciones}
        />
        <Recordatorio
          seleccionPrevia={this.state.seleccionPrevia}
          Listado={this.state.Listado}
        />
    
      </div>
    )}
}
