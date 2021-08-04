import React from 'react';
import Navbar from './Navbar';

const style = {
  padding: '5rem',
};

const Quote = () => (
  <>
    <Navbar />
    <h3 style={style}>
      Mathematics is not about numbers, equations, computations,
      or algorithms: it is about understanding. –William Paul Thurston
    </h3>
  </>
);

export default Quote;
