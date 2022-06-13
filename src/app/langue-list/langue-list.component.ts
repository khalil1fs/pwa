import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {EtatEtapeCampagneVo} from "../etat-etape-compagne/EtatEtapeCampagne.model";
import {LangueVo} from "./Langue.model";
import {KeyWordVo} from "./KeyWord.model";
import PouchDB from 'node_modules/pouchdb';
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-langue-list',
  templateUrl: './langue-list.component.html',
  styleUrls: ['./langue-list.component.scss']
})
export class LangueListComponent implements OnInit {
  keyWords: KeyWordVo[] = [];
  keyWordVo = new KeyWordVo();
  // status = {};
  // pouchdb: any;
  constructor(private http: HttpClient) {
    // this.pouchdb = new PouchDB("pouchform");
  }


  ngOnInit(): void {
    this.findAll();

  }

  findAll(){
    this.http.get<Array<KeyWordVo>>('http://localhost:8036/api/admin/keyWord/').subscribe(
      data => {
        this.keyWords = data;
        // Promise.all(data.map(form => {
        //   return { _id: form.id,type: 'keyWord', ...form };
        // }).map(async (form) => {
        //   try {
        //     const result = await this.pouchdb.put(form);
        //     console.log('type : '+ form.type)
        //     console.log('INSERT FORM', result);
        //   }catch (error){
        //     if (error.name == 'conflict') {
        //       console.log('CONFLICT FORM', error);
        //       try {
        //         const doc = await this.pouchdb.get(form._id);
        //         console.log('UPDATE FORM', await this.pouchdb.put({ ...form, ...doc }));
        //       } catch (error) {
        //         console.log('UPDATE FORM ERROR', error);
        //         throw error;
        //       }
        //     } else {
        //       console.log('INSERT FORM ERROR', error);
        //       throw error;
        //     }
        //   }
        //   }));

        /*this.keyWords.forEach(e=>this.pouchdb.post(e));

        const result = this.pouchdb.allDocs({
          include_docs: true,
          attachments: true
        });*/
        // console.log(result);

      });
  }

  save(){
    this.http.post<KeyWordVo>('http://localhost:8036/api/admin/keyWord/',this.keyWordVo).subscribe(
      data => {
        this.keyWordVo = data;
        this.keyWords.push(this.keyWordVo);
        this.keyWordVo = new KeyWordVo();
      },error => {
        // this.status = error;
        console.log(error);
      });
  }

}
