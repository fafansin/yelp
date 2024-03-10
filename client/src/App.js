// import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Container from '@mui/material/Container';

function App() {
  return (
    <div className="App">
      <Header /> 
      <Container sx={{pt:3}}>
        <Outlet />
      </Container>
      
    </div>
  );
}

export default App;
