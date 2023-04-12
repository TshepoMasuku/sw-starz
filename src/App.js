import React, { Component } from "react";
// eslint-disable-next-line
// import offlineAPIcall from "./api-new.json";
import ErrorBoundry from "./components/ErrorBoundry";
import CardList from "./containers/CardList";
import Scroll from "./containers/Scroll";
import ReactPaginate from "react-paginate";
import styled from "styled-components";
import { FcUndo } from "react-icons/fc";
import { Text } from "react-font";
import stylePagination from "./pagination.css";
import "tachyons";
import "./App.css";

const MyPagination = styled(ReactPaginate).attrs({ activeClassName: "active" })` // default to "selected"
  ${stylePagination}
`;

const dflexCenter = {
  display: "flex",
  justifyContent: "center",
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // data: offlineAPIcall, 
      data: [],
      pageData: [],
      inputText: "",
      activePage: 0,
    };
    this.displayPage = this.displayPage.bind(this);
    this.onClearInput = this.onClearInput.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  componentDidMount() {
    fetch("https://raw.githubusercontent.com/akabab/starwars-api/0.2.1/api/all.json")
      .then((response) => response.json())
      .then((results) => this.setState({ data: results, 
        pageData: results.filter(result => result.id < 10)
      }));
  }

  onInputChange = (event) => {
    this.setState({ inputText: event.target.value });
  };
  onClearInput = () => {
    this.setState({ inputText: "" });
  };
  handlePageChange(pageNumber) {
    this.setState({ activePage: pageNumber });
    // this.displayPage();
  }

  displayPage = () => {
    const {data, activePage} = this.state;
    const multiplier = 10;
    const floorID = multiplier * activePage;
    const ceilingID = floorID + 10;
    let currentID = floorID;
    let allowedIDsArr = [];

    while (currentID !== ceilingID) {
      if (currentID !== 0 && currentID !== 89) {
        allowedIDsArr.push(currentID);
      }
      currentID++;
    }
    const pageData = data.filter((star) =>
      allowedIDsArr.includes(star.id)
    );
    // this.setState({ pageData });
    this.setState({ pageData }, () => console.log("displayPage DATA :>>>", this.state.pageData));
  };

  render() {
    const { inputText, pageData: data, activePage } = this.state;
    const filteredStarz = data.filter((star) => {
      return star.name.toLowerCase().includes(inputText.toLowerCase());
    });
    return (
      <div>
        <Text family="Monoton" className="f1 tc title">
          STAR WARS - STARZ!
        </Text>
        <div style={dflexCenter}>
          <input
            type="search"
            placeholder="Search A StarWars Star."
            className="searchbar"
            onChange={this.onInputChange}
            value={this.state.inputText}
          />
          <button className="searchbarBtn" onClick={this.onClearInput}>
            <FcUndo />
          </button>
        </div>
        <br />
        <ErrorBoundry>
          <Scroll>
            {data.length === 0 ? (
              <Text family="Monoton" className="f1 tc">
                LOADING...
              </Text>
              ) : (
              <CardList passData={filteredStarz} activePage={activePage} />
            )}
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
              onPageChange={(event) => { this.handlePageChange(event.selected) }}
            />
          </div>
        </ErrorBoundry>
      </div>
    );
  }
}

export default App;