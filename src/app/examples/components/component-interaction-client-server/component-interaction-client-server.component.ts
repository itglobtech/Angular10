import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-interaction-client-server',
  templateUrl: './component-interaction-client-server.component.html',
  styleUrls: ['./component-interaction-client-server.component.scss']
})
export class ComponentInteractionClientServerComponent implements OnInit {

  constructor() { }
  public fromClient:string;
  public fromServer:string;
  ngOnInit(): void {
  }

}
