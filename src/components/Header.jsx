import React, { Fragment } from 'react';

class Header extends React.Component {
  render() {
    return (
      <Fragment>
        <div style={style}>
          <h1>{this.props.title}</h1>
          <h2>{this.props.description}</h2>
        </div>
        <hr />
      </Fragment>
    );
  }
}

const style = {
  textAlign: "center"
}

export default Header;