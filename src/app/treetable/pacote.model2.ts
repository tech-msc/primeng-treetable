// import { TreeNode } from "primeng/components/common/treenode";

export class PacoteProcedimentoGet2 {
  pacotePK: string;
  pacoteItemAgrupadorID: string;
  pacoteItemAgrupadorNome: string;
  pacoteStatus: string;
  pacoteDiasValidade: string;
  itensAgendamento: Array<ItemPacote> = [];
  unidadesExecutantes: Array<Unidade> = [];

//   label?: string;
//   data?: any;
//   icon?: any;
//   expandedIcon?: any;
//   collapsedIcon?: any;
//   children?: TreeNode[];
//   leaf?: boolean;
//   expanded?: boolean;
//   type?: string;
//   parent?: TreeNode;
//   partialSelected?: boolean;
//   styleClass?: string;
//   draggable?: boolean;
//   droppable?: boolean;
//   selectable?: boolean;
}

class ItemPacote {
  itemPacotePK: string;
  itemPacoteID: string;
  itemPacoteNome: string;
  itemPacoteCodigoVigente: string;
  itemPacoteQuantidade: string;
  fk_pacoteProcedimento: string;
}

class Unidade {
  nome: string;
  id: string;
  fk_pacote: string;
}
