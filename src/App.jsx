import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { ClientProject } from './pages/ClientProject';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/client-project" element={<ClientProject />} />
      </Routes>
    </Router>
  );
}

export default App;
