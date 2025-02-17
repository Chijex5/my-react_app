import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navigation from './components/Navigation';
import FindBooks from './components/FindBooks';
import RecentOrders from './components/RecentOrders';
import Profile from './components/Profile';
import Home from './components/Home';
import Login from './components/Login';
import ForgotPassword from './components/ForgotPassword';
import Signup from './components/signup';
import HomePage from './components/App';
import Notification from './components/Notification';
import Cookies from 'js-cookie';
import JoinStaffForm from './components/JoinStaffForm';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const auth = Cookies.get('auth');
    if (auth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    Cookies.remove('auth');
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <div className="App">
        {/* Render Navigation only if authenticated */}
        {isAuthenticated && <Navigation />}

        <Routes>
          {!isAuthenticated ? (
            <>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<Login onLogin={handleLogin} />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/join-staff" element={<JoinStaffForm />} />
              {/* Redirect to HomePage for all unmatched paths */}
              <Route path="*" element={<Navigate to="/" />} />
            </>
          ) : (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/find-books" element={<FindBooks />} />
              <Route path="/recent-orders" element={<RecentOrders />} />
              <Route path="/profile" element={<Profile onLogout={handleLogout} />} />
              <Route path="/notification" element={<Notification />} />
              <Route path="/join-staff" element={<JoinStaffForm />} />
              {/* Redirect to Home for all unmatched paths */}
              <Route path="*" element={<Navigate to="/" />} />
            </>
          )}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
