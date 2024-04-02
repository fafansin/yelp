import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header/>
      <main className="container mt-5">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
