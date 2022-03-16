import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../../../../services/auth.service";
import { Router } from "@angular/router";
import { RoutePaths } from "../../../../api/standalone.routes";
import { User } from "../../../../models/user.model";
import { catchError, EMPTY } from "rxjs";

@Component({
    selector: "ep-login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.less"]
})
export class LoginComponent implements OnInit {

    constructor(
        private router: Router,
        private authService: AuthService
    ) {}

    _formGroup: FormGroup;
    _message: string;
    _error: string;

    ngOnInit(): void {
        this._formGroup = new FormGroup({
            login: new FormControl(null, [Validators.required]),
            password: new FormControl(null, [Validators.required]),
            rememberMe: new FormControl(false, [Validators.required])
        });

        const url = decodeURI(location.href);
        if (url.includes("message=") && url.includes("?")) {
            this._message = decodeURI(location.href)
                .split("?")[1]
                .split("&")
                .find(item => item.startsWith("message"))
                .split("=")[1];
        }
    }

    _onFormSubmit(): void {
        console.log("Form value:", this._formGroup.value);
        this.authService.login(this._formGroup.value)
            .pipe(
                catchError(error => {
                    this._error = error.error.message;
                    return EMPTY;
                })
            )
            .subscribe((response: User & { message?: string }) => {
                if (response._id) {
                    AuthService.isLoggedIn = true;
                    this.router.navigate([RoutePaths.USER_DASHBOARD]);
                }
            });
    }

    _navigateToForgotPassword(): void {
        this.router.navigate([RoutePaths.FORGOT_PASSWORD]);
    }

}
