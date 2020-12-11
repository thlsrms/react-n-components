import React, { Fragment } from 'react';

// Components
import Header from './components/Header';
import Library from './components/Library';
import Counter from './components/Counter';

const books = [
  {
    title: 'El principito',
    author: 'Antoine de Saint-Exupéry'
  },
  {
    title: 'El Quijote',
    author: 'Miguel de Cervantes Saavedra'
  },
  {
    title: 'Platero y yo',
    author: 'Juan Ramón Jiménez'
  }
]


const App = () => {

  return (
    <Fragment>
      <Header title="Biblioteca" description="Consejero de libros" />
      {/* <Counter countStart={5} /> */}
      <Library books={books} />
    </Fragment>
  );
}

export default App;