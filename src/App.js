import React, { Component } from "react";
import axios from "axios";
import Converter from "./components/Converter/Converter.js";
import "./App.css";

class App extends Component {
  state = {
    valor: 0,
    cotacoes: [],
    cods:['USD','USDT','CAD','AUD','EUR','GBP','ARS','JPY','CHF','CNY','YLS','BTC','LTC','ETH','XRP']
    
  };

  componentDidMount() {
    axios.get("https://economia.awesomeapi.com.br/all").then(data => {
      let cotacoes = data.data;
      this.setState({cotacoes});
      console.log(this.state.cotacoes);
      console.log(this.state.cotacoes[this.state.cods[1]].name);

      this.state.cods.map((cod) => {
        return(
        console.log(`O valor $ ${this.state.valor} em ${this.state.cotacoes[this.cod].name} equivale a R$ ${this.state.cotacoes[this.cod].ask * this.state.valor}`)
        )
      })

    });
  }

  handleChange = event => {
    let valor = event.target.value;
    this.setState({ valor });
  };

  render() {
    return (
      <Converter valor={this.state.valor} cods={this.state.cods} cotacoes={this.state.cotacoes} handle={this.handleChange}></Converter>
    );
  }
}

export default App;
