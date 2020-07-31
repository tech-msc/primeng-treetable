import { Component, OnInit } from '@angular/core';
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

  resPacotes$ : Observable<TreeNode[]>;

  constructor(private dts: DataJsonService) { }


  ngOnInit(): void {
    this.buscarDados()
  }

  buscarDados() {

    this.varHome$ = this.dts.getFilesystem()


    // this.resPacotes$ = this.dts.getPacoteJson()
    
    
    this.resPacotes$ = this.dts.getFilesystem3()

  }
}



