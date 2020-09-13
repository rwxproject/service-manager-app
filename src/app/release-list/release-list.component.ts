import { Component, OnInit } from "@angular/core";
import { ManagerService } from "../manager.service";
import { MatTableDataSource } from "@angular/material/table";
import { Release } from "../release.model";

@Component({
  selector: "app-release-list",
  templateUrl: "./release-list.component.html",
  styleUrls: ["./release-list.component.css"],
})
export class ReleaseListComponent implements OnInit {
  release: Release[];
  displayedColumns = ["name", "status", "chart", "description"];
  dataSource = new MatTableDataSource<Release>();
  constructor(private manager: ManagerService) {}

  ngOnInit(): void {
    this.onRelease("default");
  }

  onRelease(namespace: string): any {
    this.manager.release(namespace).subscribe((response: Release[]) => {
      this.release = response;
      this.dataSource.data = response;
    });
  }
}
