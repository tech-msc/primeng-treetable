import { Component, OnInit, AfterContentInit } from '@angular/core';
import { TreeNode } from 'primeng/api'
import { DataJsonService } from './home.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  varHome$: Observable<TreeNode[]>;
  resPacotes: Array<any>;
  customNode: TreeNode[] = [];
  teste: TreeNode[] = [];






  pacotesLista: Array<TreeNode> = []

  constructor(private dts: DataJsonService) {

  }


  async ngOnInit()  {
    await this.buscarDados()
  }

  initNode() {
   

    let children: TreeNode[] = [
      {
        data: {
          name: 123,
          type: 'pacote.data.nomePacote'
        },
        children: []
      }
    ];


    this.customNode.push(
      {
        data: {
          name: 123,
          type: 'pacote.data.nomePacote'
        },
        children: children
      }
    );

  }


  tstpact: any;
  async buscarDados() {   

    let teste = await this.dts.getPacoteJson();
    console.log(teste);

    this.customNode = await this.dts.initNodeFromApi(teste);


   this.tstpact = this.dts.getListaDePacotes()
      // .subscribe( x => this.tstpact = any )



  }

  addTable() {
    console.log('clicou');

    this.teste = this.customNode;
  }
}



