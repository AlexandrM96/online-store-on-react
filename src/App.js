import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './pages/Main/Main';
import ListOfProducts from './pages/ListOfProducts/ListOfProducts';
import ListItemCard from './pages/ListItemCard/ListItemCard'
import { Route, Routes } from 'react-router-dom';
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <main className='page'>
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/allItems" element={<ListOfProducts />} />
            <Route path="/card" element={<ListItemCard />} />
          </Routes>
          <Footer />
        </main>
      </div>
    );
  }
}

export default App;
