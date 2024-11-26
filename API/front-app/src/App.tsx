import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import './App.css';
import ListarTarefa from "./paginas/listarTarefas";

function App() {
  return (
    <div id="app">
      <BrowserRouter>
        <h1>
          <Link to="./paginas/listarTarefas">Listar Tarefas</Link>
        </h1>
        <Routes>
          <Route path="./paginas/listarTarefas" element={<ListarTarefa />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
