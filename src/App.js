import './App.css';
import './global.css'
import { Route, Routes } from 'react-router-dom';
import Table from './pages/tablePage';
import RegisterPage from './pages/registerPage';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<RegisterPage />} />
        <Route path="/table/:nome?/:sobrenome?/:idade?/:email?/:cpf?/" element={<Table />} />
      </Routes>
    </div>
  );
}

export default App;
