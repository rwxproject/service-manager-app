import { Component, OnInit, Input } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-release-list',
  templateUrl: './release-list.component.html',
  styleUrls: ['./release-list.component.css'],
})
export class ReleaseListComponent implements OnInit {
  @Input() release = [];
  constructor(private app: AppComponent) {}

  ngOnInit(): void {}
}
