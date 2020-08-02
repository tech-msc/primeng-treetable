import {Component, Input, OnInit} from '@angular/core';
import {TreeNode} from 'primeng/api';

@Component({
  selector: 'app-tableprime',
  templateUrl: './tableprime.component.html'
})
export class TableprimeComponent implements OnInit {


  @Input()
  pacotes: TreeNode[];


  res: TreeNode[];
  res2: TreeNode[];

  constructor() {
  }

  listaPacotes: TreeNode[];

  ngOnInit(): void {

  }

}
