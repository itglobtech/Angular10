import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-card',
  templateUrl: './child-card.component.html',
  styleUrls: ['./child-card.component.scss']
})
export class ChildCardComponent implements OnInit {

  public childText:string = '';
  @Input() parentText:string;
  @Output() sendData = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  sendToParent(){
    this.sendData.emit(this.childText)
  }

}
