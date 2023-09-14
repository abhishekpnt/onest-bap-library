import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  @Input() serachContentList:any
  constructor() { }

  ngOnInit(): void {
    console.log('ss',this.serachContentList)
  }

}
