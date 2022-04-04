import React from "react";

export default class Historia extends React.Component {
  render() {
    return (
      <div>
        <h1 className="historia">{this.props.textoHistoria}</h1>
      </div>
    );
  }
}

