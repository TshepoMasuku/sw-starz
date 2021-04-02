import './App.css';
import "tachyons";
import { FaSearch } from "react-icons/fa";
import { Text } from "react-font";
import React, { Component } from 'react';
import CardList from "./CardList";
import ErrorBoundry from "./ErrorBoundry";
import Scroll from "./Scroll";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: "",
      data: [],
    }
    this.onInputChange = this.onInputChange.bind(this);
  }

  componentDidMount(){
    fetch("https://swapi.dev/api/people/?page=2")
      .then( response => response.json() )
      .then( datta => this.setState({ data: datta.results }) )
  }

  onInputChange = (input) => { this.setState({inputText: input.target.value}) }

  render() {
    const { inputText,data } = this.state;
    const filteredStarz = data.filter( (star) => {
      return(star.name.toLowerCase().includes(inputText))
    });
    return (
      <div className="App">
        <Text 
          family='Monoton' className="f1" style={{ marginTop: 25, marginBottom: 0 }}
        >
          STAR WARS - STARZ!
        </Text>
        <br />
        <div style={{ display:'flex',justifyContent:'center' }}>
          <input 
            placeholder="Type A StarWars Star."
            style={{ width:'20%',padding:'10px',border: '1px solid yellow' }}
            onChange={ this.onInputChange }
          />
          <button 
            style={{ padding:'10px',border: '1px solid yellow' }}
          >   <FaSearch/>
          </button>
        </div>
        <br />
        <ErrorBoundry>
          <Scroll>
            {
              data.length === 0 ? 
                <Text family='Monoton' className='f1 tc'> LOADING... </Text>
                :
                <CardList passData={filteredStarz}/>
            }
          </Scroll>
        </ErrorBoundry>
      </div>
    )
  }
}

export default App;
