import React, { useState } from 'react';
//import { Route, BrowserRouter as Router } from 'react-router-dom';
import ListContainer from '../../containers/ListContainer';
import Header from '../../containers/Header';

export default function App() {
  // const [theme, setTheme] = useState('space');

  // const handleThemeChange = (e) => {
  //   setTheme((theme) => (theme = e.target.value));
  // };

  return (
    <>
      <h1>Space: The Final Frontier...</h1>
      <Header />
      <ListContainer />
    </>
  );
}
