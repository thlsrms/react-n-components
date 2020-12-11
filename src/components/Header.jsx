import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div style={style}>
        <h1>{this.props.title}</h1>
        <h2>{this.props.description}</h2>
      </div>
    );
  }
}

const style = {
  textAlign: "center"
}

export default Header;