import React, { Component } from "react";

export default class Converter extends Component {
  render() {
    return (
      <div className="App">
        
        <input className="btn" onChange={this.props.handle} />
        
        {this.props.valor === 0 ? "Sem valores ainda" : this.props.cods.map((cod) => {
          let cota = this.props.cotacoes[cod].ask * this.props.valor;
          
        return(<div><h6>O valor {this.props.valor} em {this.props.cotacoes[cod].name}, vale em Reais {cota} </h6><br></br></div>)
        }) }
        
      </div>

      //`O valor ${this.props.valor} em ${this.props.cotacoes[cod].name}, vale em Reais ${this.props.cotacoes[cod].high * this.props.valor}  


      // this.props.state.cotacoes.map((cod,valores) => {
      //   return `${cod}`
      // })

      // {this.props.valor === 0 ? `Informe um valor`: }

      /* {this.props.cods.map((cod) => {
            return(`O valor $ ${this.props.valor} em ${this.props.cotacoes[cod].name} equivale a R$ ${this.props.cotacoes[cod].ask * this.props.valor}`)
          })} */
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