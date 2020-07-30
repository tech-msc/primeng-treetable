import { Component, OnInit } from '@angular/core';
import {TreeTableModule} from 'primeng/treetable';
import { TreeNode } from 'primeng/api'
import { DataJsonService } from './home.service';
import { timer } from 'rxjs';
import { timeInterval } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  constructor( private dts: DataJsonService) { }

  ngOnInit(): void {
    this.buscarDados();

    // setTimeout(() => {
    //   console.log('timeout');
    //   console.log(this.res);
      
    // }, 1000);
  }

  res : TreeNode[] ;

  buscarDados(){
    
  this.dts.getFilesystem()
      .subscribe( x=> this.res = x );


      // this.dts.getFilesystem()
      // .subscribe( x=>  {this.res = x; console.log(this.res) });

  }

}



