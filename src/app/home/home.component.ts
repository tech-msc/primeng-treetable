import {Component, OnInit} from '@angular/core';
import {TreeNode} from 'primeng/api';
import {DataJsonService} from './home.service';
import {Observable} from 'rxjs';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  constructor(
    private dts: DataJsonService,
    private formBuilder: FormBuilder) {

  }

  varHome$: Observable<TreeNode[]>;
  resPacotes: Array<any> = [];
  customNode: TreeNode[] = [];
  teste: TreeNode[] = [];


  pacotesLista: Array<TreeNode> = [];

  formPacote: FormGroup;

  tstpact: any;
  pctlistanos: any;
  listanos: TreeNode[] = [];

  OnInit() {
    this.initForm();
  }


  async ngOnInit() {
    await this.buscarDados();
    this.initNodePacote();

  }

  initNode() {


    const children: TreeNode[] = [
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
        children
      }
    );

  }

  initNodePacote() {

    this.tstpact
      .subscribe(arg => {
        this.pctlistanos = arg as TreeNode[];
        console.log('arg');
        console.log(arg);

      });

  }

  initForm() {
    this.formPacote = this.formBuilder.group
    (
      {
        pacoteNome: ['', Validators.required],
        itemNome: ['', Validators.required],
        estabelecimentoNome: ['', Validators.required]
      }
    );


  }


  async buscarDados() {

    const teste = await this.dts.getPacoteJson();
    console.log(teste);

    this.customNode = await this.dts.initNodeFromApi(teste);


    this.tstpact = this.dts.getListaDePacotes();
    // .subscribe( x => this.tstpact = any )

  }

  addTable() {
    console.log('clicou');

    this.teste = this.customNode;
  }
}



