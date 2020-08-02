import { Injectable } from '@angular/core';

import { TreeNode } from 'primeng/api';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


// @Injectable({providedIn: 'root'})
@Injectable()
export class DataJsonService {
  constructor(private http: HttpClient) { }

  getFilesystem(): Observable<any> {
    const URL = 'http://localhost:3000/data'

    return this.http
      .get(URL, { responseType: 'json' as const })
      .pipe(map(res => {
        return res;

      }));

  }

  getFilesystem3(): Observable<any> {
    const URL = 'http://localhost:3000/data4'

    return this.http
      .get(URL, { responseType: 'json' as const })
      .pipe(map(res => {
        // return JSON.stringify(res);
        return res;
      }));

  }

  getPacoteJson(): Promise<any> {
    const URL = 'http://localhost:3000/data3'

    return this.http.get(URL).toPromise();

  }


  getListaDePacotes(): Observable<any> {
    const URL = 'http://localhost:3000/pacotes'

    return this.http.get(URL, { responseType: 'json' })

  }

  async initNodeFromApi(responseFromApi) {

    console.log('%c-------initNodeFromApi ------', 'background: green; color: white; display:block; font-weight: bold');
    console.log()

    let customNode: Array<TreeNode> = [];

    responseFromApi.map((pacote: any, index: number) => {
      console.log('---------------------------');

      console.log('%cindex:' + `%c${index}`,
        'background: #ff82af; color: white; display:block; font-weight: bold', 'font-weight: bold; margin-left:1%')
      console.log(pacote);
      console.log('pacote.data.id: ' + pacote.data.id);
      console.log('pacote.data.nomePacote: ' + pacote.data.nomePacote);

      console.log('---------------------------');

      let children: TreeNode[] = [
        {
          data: {
            name: pacote.data.id,
            type: pacote.data.nomePacote
          },
          children: []
        }
      ];


      customNode.push(
        {
          data: {
            name: pacote.data.id,
            type: pacote.data.nomePacote
          },
          children: children
        }
      );

    });
    return customNode;
  }



}
