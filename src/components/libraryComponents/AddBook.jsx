import React, { Fragment } from 'react';

class AddBook extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      author: ''
    }
  }

  handleNewBookTitle(e) {
    this.setState({ title: e.target.value })
  }
  handleNewBookAuthor(e) {
    this.setState({ author: e.target.value })
  }

  onAdd(e) {
    e.preventDefault();
    this.props.callBack(this.state.title, this.state.author);
    this.setState({ title: '', author: '' })
  }

  render() {
    return (
      <Fragment>
        <form onSubmit={this.onAdd.bind(this)}>
          <input type="text" value={this.state.title} placeholder="Titulo del nuevo libro"
            onChange={this.handleNewBookTitle.bind(this)} required
          />
          <input type="text" value={this.state.author} placeholder="Autor del nuevo libro"
            onChange={this.handleNewBookAuthor.bind(this)}
          />
          <button onClick={this.onAdd.bind(this)}>Añadir</button>
        </form>
        <hr/>
      </Fragment>
    )
  }
}

export default AddBook;