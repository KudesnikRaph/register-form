import { Routes, Route } from 'react-router-dom';
import Login from './pages/login/Login.jsx';
import Registration from './pages/registration/Registration.jsx';
import Accounts from './pages/accounts/PageAccounts.jsx';
import Payments from './pages/payments/PagePayments.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/accounts" element={<Accounts />} />
      <Route path="/payments" element={<Payments />} />
      <Route path="/history" element={<Accounts />} />
      <Route path="/services" element={<Accounts />} />
      <Route path="/profile" element={<Accounts />} />
    </Routes>
  );
}

export default App;
