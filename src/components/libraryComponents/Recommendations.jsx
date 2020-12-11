import React from 'react';

class Recommendations extends React.Component {
  constructor(props) {
    super(props);
  }

  recommendBook(e) {
    e.preventDefault();
    this.props.callBack(Math.floor(Math.random() * this.props.booksAmout));
  }

  render() {
    return (
      <button disabled={!this.props.booksAmout} style={this.props.style} onClick={this.recommendBook.bind(this)}>Recibir recomendación de libro</button>
    );
  }
}

export default Recommendations;