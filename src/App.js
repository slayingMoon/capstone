import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Bookings from './pages/Booking';
import ConfirmedBooking from './pages/Booking/ConfirmedBooking';
import UnderConstruction from './pages/UnderConstruction';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/bookings" element={<Bookings />}/>
          <Route path='/bookings-confirmation' element={<ConfirmedBooking />}/>
          <Route path='/about' element={<UnderConstruction />}/>
          <Route path='/menu' element={<UnderConstruction />}/>
          <Route path='/order-online' element={<UnderConstruction />}/>
          <Route path='/login' element={<UnderConstruction />}/>
          <Route path='*' element={<NotFound />}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
