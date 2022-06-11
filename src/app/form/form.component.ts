import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  name = "charles"
  color = "vert"
  status = {}

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  sendForm() {
    this.http.post("https://60c785ddafc88600179f54d0.mockapi.io/forms", {
      id: new Date().valueOf(),
      createdAt: new Date(),
      name: this.name,
      color: this.color
    }).subscribe(result => {
      this.status = result
    })
  }

}
