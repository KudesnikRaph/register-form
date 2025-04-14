import { Routes, Route } from 'react-router-dom';
import Login from './pages/login/Login.jsx';
import Registration from './pages/registration/Registration.jsx';
import Accounts from './pages/accounts/PageAccounts.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/accounts" element={<Accounts />} />
    </Routes>
  );
}

export default App;
