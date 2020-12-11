import React from 'react';

class Book extends React.Component {
  constructor(props) {
      super(props);
  }

  getDescription() {
      return `${this.props.title} fué escrito por ${this.props.author ? this.props.author : 'Anónimo'}`
  }

  render() {
      return (
          <div style={style}>
              <h2>{this.props.title}</h2>
              <h4>{this.props.author}</h4>
              <p>{this.getDescription()}</p>
          </div>
      );
  }
}

const style = {
    border: "2px dotted gray"
}

export default Book;