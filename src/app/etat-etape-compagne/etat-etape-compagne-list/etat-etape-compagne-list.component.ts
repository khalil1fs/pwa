import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {EtatEtapeCampagneVo} from "../EtatEtapeCampagne.model";

@Component({
  selector: 'app-etat-etape-compagne-list',
  templateUrl: './etat-etape-compagne-list.component.html',
  styleUrls: ['./etat-etape-compagne-list.component.scss']
})
export class EtatEtapeCompagneListComponent implements OnInit {
  etatEtapes: EtatEtapeCampagneVo[] = []
  etatEtape = new EtatEtapeCampagneVo();
  status = {}


  constructor(private http: HttpClient) { }


  ngOnInit(): void {
    this.findAll();
  }

  findAll(){
    this.http.get<Array<EtatEtapeCampagneVo>>('http://localhost:8036/api/admin/etatEtapeCampagne/').subscribe(
      data => {
        // console.log(data);
        this.etatEtapes = data;
      },error => console.log('my get error: '+error));
  }

  save(){
    this.http.post<EtatEtapeCampagneVo>('http://localhost:8036/api/admin/etatEtapeCampagne/',this.etatEtape).subscribe(
      data => {
        // console.log('data = '+data);
        this.etatEtape = data;
        // console.log('status = '+this.status);
        this.etatEtapes.push(this.etatEtape);
        this.etatEtape = new EtatEtapeCampagneVo();
      },error => {
        this.status = error;
        // console.log(this.status);
      });
  }






}
