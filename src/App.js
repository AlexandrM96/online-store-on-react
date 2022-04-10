import './App.css';
import Header from './components/Header/Header';
import Main from './pages/Main/Main';
// import ListOfProducts from './pages/ListOfProducts';
import { Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <div className='page'>
      <Header />
      <Main />
      {/* <Route path="/" exact component={Main} /> */}
      {/* <Route path="/ListOfProducts" exact component={ListOfProducts} /> */}
      </div>
    </div>
  );
}

export default App;
