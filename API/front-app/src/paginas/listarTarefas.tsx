import { useEffect, useState } from "react";
import { Tarefa } from "../models/Tarefa";

function ListarTarefas() {
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);

  useEffect(() => {
    pesquisarTarefas();
  }, []);

  function pesquisarTarefas() {
    fetch("http://localhost:5000/api/tarefas/listar")
      .then((resposta) => {
        if (!resposta.ok) {
          throw new Error("Erro ao buscar tarefas");
        }
        return resposta.json();
      })
      .then((tarefas: Tarefa[]) => {
        setTarefas(tarefas);
      })
      .catch((error) => {
        console.error("Erro ao buscar tarefas:", error);
      });
  }

  return (
    <div id="listar_tarefas">
      <h1>Lista das Tarefas</h1>
      <table id="tabela">
        <thead>
          <tr>
            <th>#</th>
            <th>Título</th>
            <th>Descrição</th>
            <th>Status</th>
            <th>Criado em</th>
          </tr>
        </thead>
        <tbody>
          {tarefas.map((tarefa) => (
            <tr>
              <td>{tarefa.id}</td>
              <td>{tarefa.titulo}</td>
              <td>{tarefa.descricao}</td>
              <td>{tarefa.status}</td>
              <td>{tarefa.criadoEm}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListarTarefas;
