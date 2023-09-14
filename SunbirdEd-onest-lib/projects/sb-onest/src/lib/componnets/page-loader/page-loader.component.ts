import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'page-loader',
  templateUrl: './page-loader.component.html',
  styleUrls: ['./page-loader.component.css']
})
export class PageLoaderComponent implements OnInit {
  @Input() loading:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
