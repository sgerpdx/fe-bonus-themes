import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import ListContainer from '../../containers/ListContainer';
import Header from '../../containers/Header';

export default function App() {
  const [theme, setTheme] = useState('space');

  handleThemeChange = (e) => {
    setTheme((theme) => e.target.value);
  };

  return (
    <>
      <Header />
      <h1>Hello World</h1>
      <Router>
        <Route exact path="/" component={ListContainer} />
      </Router>
    </>
  );
}



