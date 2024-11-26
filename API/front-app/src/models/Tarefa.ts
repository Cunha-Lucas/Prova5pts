import { Categoria } from "./Categoria";

export interface Tarefa {
  id?: string;
  titulo: string;
  descricao: string;
  criadoEm?: string;
  categoria?: Categoria;
  categoriaId: number;
  status: string;
}
