import React from 'react';
import AddBook from './libraryComponents/AddBook';

import Book from './libraryComponents/Book';
import BookSearch from './libraryComponents/BookSearch';
import Recommendations from './libraryComponents/Recommendations';

class Library extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addTitle: '',
      books: [],
    }
    this.onAdd = this.onAdd.bind(this);
  }

  componentDidMount() {
    this.setState({
      books: this.props.books.map((book) => {
        return <Book key={book.title} title={book.title} author={book.author} />;
      })
    })
  }

  onAdd(newTitle, newAuthor) {
    this.state.books.push(<Book key={newTitle} title={newTitle} author={newAuthor} />);
    this.setState({
      books: this.state.books
    })
  }

  onSearch(search, callBackFn) {
    let searchArr = this.state.books.filter(book => {
      if (book.props.title.toLowerCase().includes(search.toLowerCase())) {
        return <Book key={book.props.title} title={book.props.title} />
      }
    });
    callBackFn(searchArr)
  }

  receiveRecommendation(recomendation) {
    alert(`Libro recomendado: ${this.state.books[recomendation].props.title}`);
  }

  render() {
    return (
      <React.Fragment>
        <AddBook callBack={this.onAdd.bind(this)} />

        {this.props.books.length > 0
          ? <p>Hay {this.state.books.length} libros disponibles</p>
          : <p>No hay libros disponibles</p>
        }

        <ul>
          {this.state.books}
        </ul>

        <Recommendations booksAmout={this.state.books.length} callBack={this.receiveRecommendation.bind(this)}/>
        <BookSearch callBack={this.onSearch.bind(this)} />
        <button onClick={() => this.setState({ books: [] })}>Limpiar biblioteca</button>
      </React.Fragment>
    );
  }
}

export default Library;