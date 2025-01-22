import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Header from './components/Header'
import Footer from './components/Footer'
import UserList from './components/UserList';
import TransactionList from './components/TransactionList';
import VideoManagement from './components/VideoManagement';
import TopReceiversList from './components/TopReceiversList';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              
              {/* Protected Routes */}
              <Route path="/" element={<ProtectedRoute />}>
                <Route index element={<Navigate to="/dashboard" replace />} />
                <Route path="dashboard" element={<Navigate to="/dashboard/users" replace />} />
                <Route path="dashboard/users" element={<UserList />} />
                <Route path="dashboard/transactions" element={<TransactionList />} />
                <Route path="dashboard/videos" element={<VideoManagement />} />
                <Route path="dashboard/top-receivers" element={<TopReceiversList />} />
              </Route>

              {/* Catch all route */}
              <Route path="*" element={<Navigate to="/dashboard" replace />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
