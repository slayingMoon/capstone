import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Reservations from './pages/Reservations';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="reservations" element={<Reservations />}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
