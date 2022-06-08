import './reset.css'
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import MainRoutes from './routes';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';

function App() {
  return (
    <BrowserRouter>
    <div className='page'>
      <div className='container'>
        <Header />
        <MainRoutes />
        <Footer />
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
