// import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Container from '@mui/material/Container';

function App() {
  return (
    <div className="App">
      <Header /> 
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
