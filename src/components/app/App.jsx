import React, { useState } from 'react';
//import { Route, BrowserRouter as Router } from 'react-router-dom';
import ListContainer from '../../containers/ListContainer';
import Header from '../../containers/Header';

export default function App() {
  return (
    <>
      <h1>Starfleet API Databank</h1>
      <Header />
      <ListContainer />
    </>
  );
}
