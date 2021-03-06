import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div className='main-container'>
      <Navbar></Navbar>
      <Shop></Shop>
    </div>
  );
}

export default App;
