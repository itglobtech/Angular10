import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  public clientText:string;
  @Output() sendClient = new EventEmitter();
  @Input() serverData:string;
  constructor() { }

  ngOnInit(): void {
  }
  sendData(){
    this.sendClient.emit(this.clientText);
  }
}
