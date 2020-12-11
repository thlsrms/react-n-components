import React from 'react';

class ClearLibrary extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button onClick={() => this.props.callBack()}>Limpiar biblioteca</button>
    );
  }
}

export default ClearLibrary;