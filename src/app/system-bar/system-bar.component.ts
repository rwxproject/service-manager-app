import { Component, OnInit } from "@angular/core";
import { ManagerService } from "../manager.service";

@Component({
  selector: "app-system-bar",
  templateUrl: "./system-bar.component.html",
  styleUrls: ["./system-bar.component.css"],
})
export class SystemBarComponent implements OnInit {
  status = [];
  constructor(private manager: ManagerService) {}

  ngOnInit(): void {}

  onStatus(namespace: string) {
    this.manager.status("default").subscribe((response: any) => {
      this.status = response;
      console.log(response);
    });
  }
}
