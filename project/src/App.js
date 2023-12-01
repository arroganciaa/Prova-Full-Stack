import './App.css';
import Login from './componentes/Login/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PaginaProduto from './componentes/PaginaProduto/PaginaProduto';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/PaginaInicial" element={<PaginaProduto />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
