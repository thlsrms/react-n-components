import React, { Fragment } from 'react';

class AddBook extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      author: ''
    }
  }

  handleFormInput(e) {
    this.setState({ [e.target.name]: e.target.value })
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
          <input type="text"  placeholder="Titulo del nuevo libro" name="title"
            value={this.state.title} onChange={this.handleFormInput.bind(this)} required
          />
          <input type="text"  placeholder="Autor del nuevo libro" name="author"
            value={this.state.author} onChange={this.handleFormInput.bind(this)}
          />
          <button>Añadir</button>
        </form>
        <hr/>
      </Fragment>
    )
  }
}

export default AddBook;