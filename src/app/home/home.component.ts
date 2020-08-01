import { Component, OnInit, AfterContentInit } from '@angular/core';
import { TreeNode } from 'primeng/api'
import { DataJsonService } from './home.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  varHome$: Observable<TreeNode[]>;

  resPacotes: Array<any>;

  customNode: TreeNode[] = [];
  teste: TreeNode[] = [];

  constructor(private dts: DataJsonService) {

  }


  async ngOnInit()  {

    //this.initNode();
    //this.customNode = await this.dts.initNodeFromApi();
    //console.log('custom node');
    //console.log(this.customNode);

    await this.buscarDados()


  }

  initNode() {
    // this.customNode.push(
    //   {
    //     data: {
    //       nome: 'Test',
    //       tipo: 'Type',
    //       tam: '5kb'
    //     },
    //     children: [
    //       {
    //         data: {
    //           nome: 'Test Child',
    //           tipo: 'Type Child',
    //           tam: '5kb Child'
    //         },
    //         children: [
    //           {
    //             data: {
    //               nome: "Expenses.doc",
    //               tipo: "30kb",
    //               tam: "Document"
    //             }
    //           },
    //         ]
    //       }
    //     ]
    //   }
    // );

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



  async buscarDados() {

    //this.varHome$ = this.dts.getFilesystem()

    // this.dts.getPacoteJson()
    //   .subscribe(
    //     res => {
    //       this.resPacotes = res;
    //       console.log(this.resPacotes);

    //     },
    //     err => {

    //     });
    // this.resPacotes$ = this.dts.getPacoteJson()


    let teste = await this.dts.getPacoteJson();
    console.log(teste);

    this.customNode = await this.dts.initNodeFromApi(teste);



  }

  addTable() {
    console.log('clicou');

    this.teste = this.customNode;
  }
}



