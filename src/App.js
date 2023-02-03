import React, { Component } from 'react';
// eslint-disable-next-line
import offlineAPIcall from "./api.json";
import ErrorBoundry from "./components/ErrorBoundry";
import CardList from "./containers/CardList";
import Scroll from "./containers/Scroll";
import ReactPaginate from 'react-paginate';
import styled from 'styled-components';
import { FcUndo } from "react-icons/fc";
import { Text } from "react-font";
import stylePagination from './pagination.css';
import "tachyons";
import './App.css';


const MyPagination = styled(ReactPaginate)
  .attrs({activeClassName: 'active',}) // default to "selected"
`${stylePagination}`;

const dflexCenter = { 
  display: 'flex',
  justifyContent: 'center',
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // data: offlineAPIcall,
      data: [],
      inputText: "",
      activePage: 0, 
    }
    this.onInputChange = this.onInputChange.bind(this);
    this.onClearInput = this.onClearInput.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  componentDidMount(){
    fetch("https://swapi.dev/api/people/?page=1")
      .then( response => response.json() )
      .then( datta => this.setState({ data: datta.results }) )
  }
  componentWillUpdate(){
    const {activePage} = this.state;
    fetch(`https://swapi.dev/api/people/?page=${activePage+1}`)
      .then( response => response.json() )
      .then( datta => this.setState({ data: datta.results }) )
  }

  onInputChange = (event) => { 
    this.setState({inputText: event.target.value});
  }
  onClearInput = () => { 
    this.setState({ inputText: "" });
  }

  handlePageChange(pageNumber) {
    // pageNumber - begins from zero like indexes
    // console.log(`The active page is ${pageNumber}`);
    this.setState({ activePage: pageNumber, data:[] });
  }

  render() {
    const { inputText, data, activePage } = this.state;
    const filteredStarz = data.filter( (star) => {
      return( star.name.toLowerCase().includes( inputText.toLowerCase() ) )
    });
    return (
      <div>
        <Text family='Monoton' className="f1 tc title">
          STAR WARS - STARZ!
        </Text>
        <div style={dflexCenter}>
          <input 
            type="search"
            placeholder="Search A StarWars Star."
            className='searchbar'
            onChange={ this.onInputChange }
            value={this.state.inputText}
          />
          <button 
            className='searchbarBtn'
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
          <div style={dflexCenter} data-pagination>
            <MyPagination 
              previousLabel="Previous"
              nextLabel="Next"
              pageClassName="page-item"
              pageLinkClassName="page-link"
              previousClassName="page-item"
              previousLinkClassName="page-link"
              nextClassName="page-item"
              nextLinkClassName="page-link"
              breakClassName="page-item"
              breakLinkClassName="page-link"
              containerClassName="pagination"
              activeClassName="active"
              marginPagesDisplayed={4}
              pageRangeDisplayed={4}
              pageCount={9}
              forcePage={activePage}
              onPageChange={ event => this.handlePageChange(event.selected) }
            />
          </div>
        </ErrorBoundry>
      </div>
    )
  }
}

export default App;