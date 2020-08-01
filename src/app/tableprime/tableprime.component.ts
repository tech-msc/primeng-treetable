import { Component, OnInit, Input, Output } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { Observable } from 'rxjs';
import { PacoteTree } from './tablerow.model';
import { timeout } from 'rxjs/operators';

@Component({
  selector: 'app-tableprime',
  templateUrl: './tableprime.component.html',
  styleUrls: ['./tableprime.component.scss']
})
export class TableprimeComponent implements OnInit {


  //@Input()
  //listaDados: Observable<TreeNode[]>;

  @Input()
  pacotes: TreeNode[];
  // @Output() deucerto: any;

  res : TreeNode[];
  res2 : TreeNode[];

  constructor() {}
  listaPacotes : TreeNode[]

  ngOnInit(): void {



    // debugger
    //this.listaDados2.subscribe( x => {  } )

    // this.printPacotes()

  }

  // printPacotes(){
    // setTimeout(() => {
    //   console.log(this.res2);
    //   console.log(this.res);
    // }, 5000);
  // }

}
