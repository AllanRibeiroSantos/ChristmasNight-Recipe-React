import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import PaginaInicial from './components/pages/paginaInicial/PaginaInicial';
import Receitas from './components/pages/receitas/Receitas';

export default function App() {
  return (
    <Router >
      <Routes >
        <Route exact path='/' element={<PaginaInicial />} />
        <Route path='/receitas' element={<Receitas />} />
      </Routes>
    </Router >
  )
}
