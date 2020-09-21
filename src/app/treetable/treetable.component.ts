import { map } from 'rxjs/operators';
import { PacoteProcedimentoGet2 } from './pacote.model2';
import { PacoteProcedimentoGet } from './pacote.model';
import { Component, OnInit, ContentChildren, QueryList } from '@angular/core';
import { TreeNode } from 'primeng/components/common/treenode';
import { NodeService } from '../node.service';
import { PrimeTemplate } from 'primeng/components/common/shared';

@Component({
  selector: 'app-treetable',
  templateUrl: './treetable.component.html',
  styleUrls: ['./treetable.component.css'],
})
export class TreetableComponent implements OnInit {
  files1: TreeNode[];

  pacotes: PacoteProcedimentoGet[];
  pacotes2: any[];
  listaCentral: any;

  cols: any[];
  constructor(private nodeService: NodeService) {}

  ngOnInit() {
    this.nodeService.getFilesystem()
      .then((files) => (this.files1 = files));

    this.nodeService.getPacotes()
      .subscribe((pacotes) => {
        this.pacotes = pacotes;
        console.log('modelo');
        console.log(this.files1);
    });



    this.nodeService.getPacotes()
      .subscribe((pacotes) => {
      this.pacotes2 = pacotes;
      // console.log("pacotes 2");
      //console.log(this.pacotes);

      this.resTratamento =  //{
        this.tratamentoDeDados(this.pacotes2),

      //}

      console.log('resTratamento')      ;
      console.log(this.resTratamento);

    });


  }
  resTratamento: any;

  tratamentoDeDados(dados: PacoteProcedimentoGet2[]) {
    console.log('foreach =================');

    const listaFinal: Array<any> = [];

    dados.forEach((pacote) => {


      const listaItens: Array<any> = [];
      pacote.itensAgendamento.map(
        item => {
            listaItens.push ( {
              data: {
                itemNome:  item.itemPacoteNome
                ,temBotao: true
              },
              children: []
            });
        }
      );


      const listaUnidades: Array<any> = [];
      pacote.unidadesExecutantes.map(
        unidade => {
          listaUnidades.push({
              data: {
                unidadeNome:  unidade.nome
              },
              children: listaItens
            }
          ); }

      );


      listaFinal.push( {
        data: {
          pacoteNome:  pacote.pacoteItemAgrupadorNome,
          pacoteValidade: pacote.pacoteDiasValidade,
          pacoteStatus: pacote.pacoteStatus
        },
        children: listaUnidades
      });

    });

    return listaFinal;
  }


}
