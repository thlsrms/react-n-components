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
            <div style={style.border}>
                <h2>{this.props.title}</h2>
                <h4>{this.props.author}</h4>
                <p>{this.getDescription()}</p>
                <button style={style.button} onClick={() => this.props.callBack(this)}>Borrar</button>
            </div>
        );
    }
}

const style = {
    border: {
        border: "2px dotted gray"
    },
    button: {
        position: 'relative',
        float: 'right',
        bottom: '80px',
        right: '20px'
    }
}

export default Book;