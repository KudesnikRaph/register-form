import { Routes, Route } from 'react-router-dom';
import Login from './Login.jsx';
import Registration from './Registration.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
    </Routes>
  );
}

export default App;
