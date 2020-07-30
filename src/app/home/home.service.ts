import { Injectable } from '@angular/core';

import { TreeNode } from 'primeng/api';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


// @Injectable({providedIn: 'root'})
@Injectable()
export class DataJsonService {
    constructor(private http: HttpClient) { }

    getFilesystem() : Observable<any> {
        const URL = 'http://localhost:3000/data'
        
        // return this.http
        //     .get(URL, { responseType: 'json' as const})
        //     .pipe(map( res => { 
        //                  return res
        //     }));

     

            return this.http
            .get(URL, { responseType: 'json' as const})
            .pipe(map( res => { 
                         return res;
                         
            }));



            // .toPromise()
            // .then(res => <TreeNode[]> res.json().data);
    }
    
}