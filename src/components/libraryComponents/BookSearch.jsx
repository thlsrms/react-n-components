import React from 'react';

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
    if (this.state.searchValue) this.props.callBack(this.state.searchValue, e.target[1].value, this.showResults.bind(this));
    this.setState({ searchValue: '' });
  }

  showResults(books) {
    this.setState({ searchResult: books });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSearch.bind(this)}>
          <input type="text" value={this.state.searchValue} placeholder="Buscar"
            onChange={(e) => this.onSearchChange(e)} required
          />
          <select name="searchType">
            <option value="title">Titulo</option>
            <option value="author">Autor</option>
          </select>
          <button style={{marginLeft: "15px"}}>Buscar Libro</button>
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