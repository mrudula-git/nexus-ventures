import './App.css'
import RegistrationForm from './components/RegistrationForm'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/dashboard" element={<Dashboard/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
