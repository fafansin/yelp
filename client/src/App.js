import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header/>
      <main className="container my-3">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
