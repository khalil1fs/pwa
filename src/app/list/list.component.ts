import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  items: any[] = []

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  getAll() {
    this.http.get<Array<any>>("https://60c785ddafc88600179f54d0.mockapi.io/forms").subscribe(result => {
      this.items = result
    })
  }

}
