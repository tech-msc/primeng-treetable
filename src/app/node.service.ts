import { PacoteProcedimentoGet2 } from './treetable/pacote.model2';
import { PacoteProcedimentoGet } from './treetable/pacote.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { TreeNode } from 'primeng/components/common/treenode';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class NodeService {

    constructor(private http: HttpClient) { }

    getFiles() {
    return this.http.get<any>('../assets/files.json')
      .toPromise()
      .then(res => <TreeNode[]>res.data);
    }

    // getLazyFiles() {
    // return this.http.get<any>('../assets/showcase/data/files-lazy.json')
    //   .toPromise()
    //   .then(res => <TreeNode[]>res.data);
    // }

    getFilesystem() {
    return this.http.get<any>('../assets/filesystem.json')
      .toPromise()
      .then(res => <TreeNode[]>res.data);
    }

    // getLazyFilesystem() {
    // return this.http.get<any>('assets/showcase/data/filesystem-lazy.json')
    //   .toPromise()
    //   .then(res => <TreeNode[]>res.data);
    // }


    getPacoteProcedimento(): Observable<PacoteProcedimentoGet[]>
    {
      return this.http.get<any>('../assets/listar.json')
              .pipe(map( resp => resp ));
    }


    getPacotes(): Observable<any> {
      return this.http.get<any>('../assets/listar2.json')
              // .pipe(map( resp => resp['data'] ));
              .pipe(map( resp => resp ));
    }

    getPacotes2() {
      return this.http.get<any>('../assets/listar2.json')
        .toPromise()
        .then(res => res.data);
    }
}
