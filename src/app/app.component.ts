import { Component } from "@angular/core";

@Component({
    selector: "ep-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.less"]
})
export class AppComponent {

    _isAuthorized: boolean = true;
}

