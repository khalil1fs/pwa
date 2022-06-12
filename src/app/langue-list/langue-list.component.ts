import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {EtatEtapeCampagneVo} from "../etat-etape-compagne/EtatEtapeCampagne.model";
import {LangueVo} from "./Langue.model";
import {KeyWordVo} from "./KeyWord.model";

@Component({
  selector: 'app-langue-list',
  templateUrl: './langue-list.component.html',
  styleUrls: ['./langue-list.component.scss']
})
export class LangueListComponent implements OnInit {
  keyWords: KeyWordVo[] = [];
  keyWordVo = new KeyWordVo();
  status = {};

  constructor(private http: HttpClient) { }


  ngOnInit(): void {
    this.findAll();
  }

  findAll(){
    this.http.get<Array<KeyWordVo>>('http://localhost:8036/api/admin/keyWord/').subscribe(
      data => {
        console.log('langue list = '+data);
        this.keyWords = data;
      },error => console.log('my get error: '+error));
  }

  save(){
    this.http.post<KeyWordVo>('http://localhost:8036/api/admin/keyWord/',this.keyWordVo).subscribe(
      data => {
        // console.log('data = '+data);
        this.keyWordVo = data;
        // console.log('status = '+this.status);
        this.keyWords.push(this.keyWordVo);
        this.keyWordVo = new KeyWordVo();
      },error => {
        this.status = error;
        // console.log(this.status);
      });
  }

}
