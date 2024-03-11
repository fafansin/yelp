import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Container from '@mui/material/Container';
import CampgroundProvider from './contexts/CampgroundContext';

function App() {
  return (
    <div className="App">
      <Header /> 
      <CampgroundProvider>
        <Container sx={{pt:3}}>
          <Outlet />
        </Container>
      </CampgroundProvider>
    </div>
  );
}

export default App;
