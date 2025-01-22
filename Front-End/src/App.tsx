import './App.css'
import RegistrationForm from './components/RegistrationForm'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';
import PaymentGateway from "./components/PaymentGateway"

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/payment" element={<PaymentGateway/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
