import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  onLoadServers() {
    // some calculations
    this.router.navigate(["servers"]);
  }

  onEditServer(id) {
    // some calculations
    this.router.navigate(["servers", id, "edit"], {
      queryParams: { allowEdit: "1" },
    });
  }
}
