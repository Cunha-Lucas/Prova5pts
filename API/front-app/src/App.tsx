import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import TarefaCadastrar from "./paginas/cadastrarTarefa";
import ListarTarefa from "./paginas/listarTarefas";

function App() {
  return (
    <div id="app">
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/listarTarefas">Listar Tarefas</Link>
            </li>
            <li>
              <Link to="/cadastrarTarefa">Cadastrar Tarefa</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/listarTarefas" element={<ListarTarefa />} />
          <Route path="/cadastrarTarefa" element={<TarefaCadastrar />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
