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
    
    
      axios.get(`https://economia.awesomeapi.com.br/${this.state.cods[0]}-BRL`).then(data => {
        let cotacoes = data.data[0];
        //this.setState({cotacoes:[...this.state.cotacoes, cotacoes]});
        this.state.cotacoes.push(cotacoes);
     //   console.log(this.state.cotacoes);
      //  console.log(this.state.cotacoes[this.state.cods[0]].name);
  
      return(
        console.log(this.state.cotacoes)
        )
  
      });
        
      
    

    console.log(this.state.cotacoes);
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
