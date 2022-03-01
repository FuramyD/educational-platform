import { Component } from "@angular/core";
import { AuthService } from "./services/auth.service";
import { RestApiService } from "./services/rest-api.service";

@Component({
    selector: "ep-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.less"]
})
export class AppComponent {

    _isAuthorized: boolean = true;

    public response: unknown;

    constructor(
        private authService: AuthService,
        private restApiService: RestApiService
    ) {}

    _onButtonClick(): void {
        this.restApiService.get("hello", {
            request: {
                params: {
                    name: "Sasha"
                }
            }
        }).subscribe((response: unknown) => this.response = response);
    }
}

