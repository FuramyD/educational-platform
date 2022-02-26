import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: "ep-user-dashboard-page",
    templateUrl: "./user-dashboard-page.component.html",
    styleUrls: ["./user-dashboard-page.component.less"]
})
export class UserDashboardPageComponent {

    _userId: string;

    constructor(private route: ActivatedRoute) {
        this._userId = route.snapshot.paramMap.get("userId");
    }
}
