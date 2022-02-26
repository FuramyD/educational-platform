import { Component, OnInit } from "@angular/core";
import { AuthService } from "./services/auth.service";

@Component({
    selector: "ep-app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.less"]
})
export class AppComponent implements OnInit {

    _isAuthorized: boolean = true;

    constructor(private authService: AuthService) {
    }

    ngOnInit(): void {

    }
}

