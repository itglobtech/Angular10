import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss'],
})
export class ServerComponent implements OnInit {
  public serverText: string;
  @Output() sendServer = new EventEmitter();
  @Input() clientData: string;
  constructor() {}

  ngOnInit(): void {}
  sendData() {
    this.sendServer.emit(this.serverText);
  }
}
