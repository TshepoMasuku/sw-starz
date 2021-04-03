import './App.css';
import "tachyons";
import { FcUndo } from "react-icons/fc";
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
    this.onClearInput = this.onClearInput.bind(this);
  }

  componentDidMount(){
    fetch("https://swapi.dev/api/people/?page=2")
      .then( response => response.json() )
      .then( datta => this.setState({ data: datta.results }) )
  }

  onInputChange = (event) => { 
    this.setState({inputText: event.target.value});
  }
  onClearInput = () => { 
    this.setState({inputText: ""});
  }

  render() {
    const { inputText,data } = this.state;
    const filteredStarz = data.filter( (star) => {
      return( star.name.toLowerCase().includes( inputText.toLowerCase() ) )
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
            type="search"
            placeholder="Type A StarWars Star."
            style={{ width:'20%',padding:'10px',border: '1px solid yellow' }}
            onChange={ this.onInputChange }
          />
          <button type="submit"
            style={{ padding:'10px',border: '1px solid yellow' }}
            onClick={ this.onClearInput }
          >
            <FcUndo/>
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
