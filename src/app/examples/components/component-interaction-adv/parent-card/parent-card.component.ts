import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-parent-card',
  templateUrl: './parent-card.component.html',
  styleUrls: ['./parent-card.component.scss']
})
export class ParentCardComponent implements OnInit {

  public parentText:string='';
  public childData:string;
  constructor() { }

  ngOnInit(): void {
  }

}
