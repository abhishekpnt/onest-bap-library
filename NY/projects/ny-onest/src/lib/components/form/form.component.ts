import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
childName:string='';
childClass:string='';
marks=''

  constructor() { }

  ngOnInit(): void {
  }

}
