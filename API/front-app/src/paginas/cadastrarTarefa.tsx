import axios from "axios";
import { useEffect, useState } from "react";
import { Tarefa } from "../models/Tarefa";

function TarefaCadastrar() {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [status, setStatus] = useState("");
  const [categoriaId, setCategoriaId] = useState(0);
  const [categorias, setCategorias] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get<any[]>("http://localhost:5000/api/tarefas/listar")
      .then((resposta) => {
        setCategorias(resposta.data);
      });
  }, []);

  function enviarTarefa(event: any) {
    event.preventDefault();
    const tarefa: Tarefa = {
      titulo: titulo,
      descricao: descricao,
      status: status,
      categoriaId: categoriaId,
    };

    //AXIOS - Biblioteca de requisições HTTP

    fetch("http://localhost:5000/api/tarefas/cadastrar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tarefa),
    })
      .then((resposta) => resposta.json())
      .then((tarefa) => {
        console.log(tarefa);
      });
  }

  return (
    <div>
      <h1>Cadastrar tarefa</h1>
      <form onSubmit={enviarTarefa} id="form-cadastro">
        <div className="form-group">
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            name="nome"
            required
            onChange={(event: any) => setTitulo(event.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="descricao">Descrição:</label>
          <input
            type="text"
            id="descricao"
            name="descricao"
            required
            onChange={(event: any) => setDescricao(event.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="categoria">Categorias:</label>
          <select onChange={(event: any) => setCategoriaId(event.target.value)}>
            {categorias.map((categoria) => (
              <option value={categoria.id} key={categoria.id}>
                {categoria.nome}
              </option>
            ))}
          </select>
        </div>

        <button type="submit">Cadastrar Tarefa</button>
      </form>
    </div>
  );
}

export default TarefaCadastrar;
