import React, { Component } from "react";
import axios from "axios";
import Converter from "./components/Converter/Converter.js";
import "./App.css";

class App extends Component {
  state = {
    valor: 0,
    cotacoes: [],
    cods:['USD','USDT','CAD','AUD','EUR','GBP','ARS','JPY','CHF','CNY','ILS','BTC','LTC','ETH','XRP']
    //cods: []
  };

  componentDidMount() {
    axios.get("https://economia.awesomeapi.com.br/all").then(data => {
      let cotacoes = data.data;
      this.setState({cotacoes});
   //   console.log(this.state.cotacoes);
    //  console.log(this.state.cotacoes[this.state.cods[0]].name);

      this.state.cods.map((cod) => {
        return(
        console.log(cod+" - "+this.state.cotacoes[cod].code)
        )
      })

    });
  }

  handleChange = event => {
    let valor = event.target.value;
    
    this.setState({ valor });
    console.log(this.state.valor);

    
  };

  render() {
    return (
      <div className="App">
        <h1>Conversor de Moedas</h1>
      <Converter valor={this.state.valor} cods={this.state.cods} cotacoes={this.state.cotacoes} handle={this.handleChange}></Converter>
      </div>
    );
  }
}

export default App;
