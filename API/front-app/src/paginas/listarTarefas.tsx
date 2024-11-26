import { useEffect, useState } from "react";
import { Tarefa } from "../models/Tarefa";

function listarTarefas() {
    const [tarefas, setTarefas] = useState<Tarefa[]>([]);

    useEffect(() => {
        pesquisarTarefas();
    });

  function pesquisarTarefas() {
    fetch("http://localhost:5000/api/categoria/listar")
      .then((resposta) => resposta.json())
      .then((tarefas) => {
        // console.table(tarefas);
        setTarefas(tarefas);
      });
 }

  return (
    <div id="listar_tarefas">
      <h1>Lista das Tarefas</h1>
      <table id="tabela">
        <thead>
          <tr>
            <th>#</th>
            <th>Titulo</th>
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

export default listarTarefas;