import React from 'react';

import AddBook from './libraryComponents/AddBook';
import Book from './libraryComponents/Book';
import BookSearch from './libraryComponents/BookSearch';
import ClearLibrary from './libraryComponents/ClearLibrary';
import Recommendations from './libraryComponents/Recommendations';

class Library extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    }
  }

  componentDidMount() {
    this.setState({
      books: this.props.books.map((book) => {
        return <Book key={book.title} title={book.title} author={book.author} />;
      })
    })
  }

  onAdd(newTitle, newAuthor) {
    if (this.searchBook(newTitle).length > 0) { // Book already exists
      alert(`${newTitle} ya existe en la biblioteca`);
      return;
    }

    this.state.books.push(<Book key={newTitle} title={newTitle} author={newAuthor} />);
    this.setState({
      books: this.state.books
    })
  }

  onSearch(search, callBackFn) {
    callBackFn(this.searchBook(search));
  }

  searchBook(titleSearch) {
    let searchArr = this.state.books.filter(book => {
      if (book.props.title.toLowerCase().includes(titleSearch.toLowerCase())) {
        return <Book key={book.props.title} title={book.props.title} />
      }
    });
    return searchArr;
  }

  receiveRecommendation(recomendation) {
    alert(`Libro recomendado: ${this.state.books[recomendation].props.title}`);
  }

  clearLibrary() {
    this.setState({ books: [] });
  }

  render() {
    return (
      <div style={styles.center}>
        <AddBook callBack={this.onAdd.bind(this)} />
        {this.state.books.length > 0
          ? <p>Hay {this.state.books.length} libros disponibles</p>
          : <p>No hay libros disponibles</p>
        }

        <ul>{this.state.books}</ul>

        <Recommendations booksAmout={this.state.books.length}
          callBack={this.receiveRecommendation.bind(this)} style={styles.verticalSpacing}
        />
        <BookSearch callBack={this.onSearch.bind(this)} />
        <ClearLibrary callBack={this.clearLibrary.bind(this)} />
      </div>
    );
  }
}

const styles = {
  center: {
    textAlign: "center",
    padding: "10px"
  },
  verticalSpacing: {
    marginBottom: "15px"
  }
}

export default Library;