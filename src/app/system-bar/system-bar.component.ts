import { Component, OnInit, Input } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-system-bar',
  templateUrl: './system-bar.component.html',
  styleUrls: ['./system-bar.component.css'],
})
export class SystemBarComponent implements OnInit {
  @Input() status = [];
  constructor(private app: AppComponent) {}

  ngOnInit(): void {}
}
