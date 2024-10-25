import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import { PhoneInput } from './Components/PhoneInput';
import INputOTP from './Components/InputOTP';
import Home from './Components/Home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<PhoneInput />} />
        <Route path='/otp' element={<INputOTP />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
