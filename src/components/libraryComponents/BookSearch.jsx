import React from 'react';

import Book from './Book';

class BookSearch extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchValue: '',
      searchResult: []
    }
  }

  onSearchChange(e) {
    this.setState({ searchValue: e.target.value });
  }

  onSearch(e) {
    e.preventDefault();
    this.props.callBack(this.state.searchValue, this.showResults.bind(this));
    this.setState({ searchValue: '' });
  }

  showResults(books) {
    this.setState({ searchResult: books });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSearch.bind(this)}>
          <input type="text" value={this.state.searchValue} placeholder="Titulo" onChange={(e) => this.onSearchChange(e)} />
          <button onClick={this.onSearch.bind(this)}>Buscar Libro</button>
        </form>
        {this.state.searchResult
          ? <ul>{this.state.searchResult}</ul>
          : null
        }
      </div>
    );
  }
}

export default BookSearch;