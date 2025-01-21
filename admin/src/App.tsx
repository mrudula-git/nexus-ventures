import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login'
import Header from './components/Header'
import Footer from './components/Footer'
import DashboardLayout from './components/DashboardLayout';
import UserList from './components/UserList';
import TransactionList from './components/TransactionList';
import VideoManagement from './components/VideoManagement';
import TopReceiversList from './components/TopReceiversList';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // For demo purposes, let's assume user is logged in
  const isLoggedIn = true;

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              path="/"
              element={
                isLoggedIn ? (
                  <DashboardLayout />
                ) : (
                  <Navigate to="/login" replace />
                )
              }
            >
              <Route index element={<Navigate to="/users" replace />} />
              <Route path="users" element={<UserList />} />
              <Route path="transactions" element={<TransactionList />} />
              <Route path="videos" element={<VideoManagement />} />
              <Route path="top-receivers" element={<TopReceiversList />} />
              {/* Add other routes here */}
            </Route>
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
