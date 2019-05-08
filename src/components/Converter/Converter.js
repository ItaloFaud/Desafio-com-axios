import React, { Component } from "react";

export default class Converter extends Component {
  render() {
    return (
      <div className="App">
        <h1>Conversor de Moedas</h1>
        <input className="btn" onChange={this.props.handle} />
        <h6>
          {/* {this.props.cods.map((cod) => {
            return(`O valor $ ${this.props.valor} em ${this.props.cotacoes[cod].name} equivale a R$ ${this.props.cotacoes[cod].ask * this.props.valor}`)
          })} */}
        </h6>
      </div>
      // this.props.state.cotacoes.map((cod,valores) => {
      //   return `${cod}`
      // })

      // {this.props.valor === 0 ? `Informe um valor`: }
    );
  }
}


// {this.props.state.valor === 0
//   ? `Informe um valor`
//   : `$ ${this.props.state.valor} em  com a cotação R$ ${this.props.state.cotacoes[0].ask} são R$ ${(
//     this.props.state.valor * this.props.state.cotacoes[0].ask
//     ).toLocaleString("pt-br", {
//       style: "currency",
//       currency: "BRL"
//     })} reais`}