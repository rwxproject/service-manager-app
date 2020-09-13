import { Component } from '@angular/core';
import { ManagerService } from './manager.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  status = [];
  release = [];

  constructor(private manager: ManagerService) {}

  onStatus(namespace: string) {
    this.manager.status('default').subscribe((response: any) => {
      this.status = response;
      console.log(response);
    });
  }
  onRelease(namespace: string) {
    this.manager.release('default').subscribe((response: any) => {
      this.release = response;
      console.log(response);
    });
  }
}
