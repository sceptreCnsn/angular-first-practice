import { Component } from '@angular/core';
import { getRenderedText } from '@angular/core/src/render3';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {
  title = 'The Server Component';
  serverName: string;
  serverName2: string;
  serverId: number;
  status: string;
  numberOfServers: number;
  servers = [
    {
      name: 'Server 1',
      id: 1
    },
    {
      name: 'Server 2',
      id: 2
    }
  ];

  constructor() {
    this.numberOfServers = 1;
    this.serverName = 'Server Name One Way Binding';
    this.serverName2 = 'Server Name Two Way Binding';
    this.serverId = 12;
    this.status = 'offline';
  }

  getServerStatus = () => {
    return this.status;
  };

  addNewServer = () => {
    this.numberOfServers++;
  };

  createRange(number) {
    const items: number[] = [];
    for (let i = 1; i <= number; i++) {
      items.push(i);
    }
    return items;
  }

  onUpdateServerName(e) {
    const newStr = e.target.value;
    this.serverName = newStr;
  }

  toggleStatus() {
    this.status = this.status === 'offline' ? 'online' : 'offline';
  }
}
