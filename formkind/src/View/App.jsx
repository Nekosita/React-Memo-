import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import ViewA from './ViewA/ViewA';
import ViewB from './ViewB/ViewB';
import Greeting from './Greeting';


function MainLayout() {
  return (
    <div>
      <h1>Practice of React</h1>
      <Greeting />
      <Header />
    </div>
  );
}

class App extends React.Component {
  render() {
    return (
      <div>
        <MainLayout />
      <div/>
      <div></div>
      <Routes>
            <Route path="viewA" element={<ViewA />} />
            <Route path="viewB" element={<ViewB />} />
  
        </Routes>
        </div>
    );
  }
}



export default App;
