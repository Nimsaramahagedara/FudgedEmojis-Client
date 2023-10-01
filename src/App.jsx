import { useState } from 'react';
import './App.css';
import SignIn from './pages/SignIn';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'; // Import HashRouter instead of BrowserRouter
import SignUp from './pages/SignUp';
import UserDashboard from './pages/UserDashboard';
import AdminLayout from './Layout/Layout';
import NewRequest from './pages/Admin/NewRequest';
import Completed from './pages/Admin/Completed';
import Rejected from './pages/Admin/Rejected';
import SendEmails from './pages/Admin/SendEmails';
import WaitingForSpin from './pages/Admin/WaitingForSpin';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NewSpin from './pages/SpinWheel2';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <>
      <ToastContainer autoClose={1500} pauseOnFocusLoss={false} pauseOnHover={false} />
      <Router> {/* Use HashRouter instead of BrowserRouter */}
        <Routes>
          <Route path="/" element={<UserDashboard />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/spin" element={<NewSpin />} />

          <Route path="/admin" element={<AdminLayout />}>
            <Route path="new" element={<NewRequest />} />
            <Route path="completed" element={<Completed />} />
            <Route path="rejected" element={<Rejected />} />
            <Route path="send" element={<SendEmails />} />
            <Route path="waiting" element={<WaitingForSpin />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
