import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <main class="container mt-5">
          <h1>Main Content</h1>
      </main>
      <Footer />
    </div>
  );
}

export default App;
