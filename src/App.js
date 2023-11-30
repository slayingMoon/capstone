import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Bookings from './pages/Booking';
import ConfirmedBooking from './pages/Booking/ConfirmedBooking';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/bookings" element={<Bookings />}/>
          <Route path='/bookings-confirmation' element={<ConfirmedBooking />}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
