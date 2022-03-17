import { Component, Inject, OnDestroy, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../../../../services/auth.service";
import { Router } from "@angular/router";
import { RoutePaths } from "../../../../api/standalone.routes";
import { catchError, EMPTY, ReplaySubject, takeUntil } from "rxjs";
import { ProfileResponse } from "../../../../models/response.model";
import { LOCATION } from "../../../../common/tokens/browser.tokens";
import { HttpErrorResponse } from "@angular/common/http";

@Component({
    selector: "ep-login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.less"]
})
export class LoginComponent implements OnInit, OnDestroy {

    constructor(
        @Inject(LOCATION) private locationRef: Location,
        private router: Router,
        private authService: AuthService
    ) {}

    _formGroup: FormGroup;
    _message: string;
    _error: string;

    private destroy$: ReplaySubject<void> = new ReplaySubject<void>(1);

    ngOnInit(): void {
        this._formGroup = new FormGroup({
            login: new FormControl(null, [Validators.required]),
            password: new FormControl(null, [Validators.required]),
            rememberMe: new FormControl(false, [Validators.required])
        });

        const url = decodeURI(this.locationRef.href);
        if (url.includes("message=") && url.includes("?")) {
            this._message = url
                .split("?")[1]
                .split("&")
                .find(item => item.startsWith("message"))
                .split("=")[1];
        }
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

    _onFormSubmit(): void {
        console.log("Form value:", this._formGroup.value);
        this.authService.login(this._formGroup.value)
            .pipe(
                catchError(({ error }: HttpErrorResponse) => {
                    this._error = error.message;
                    return EMPTY;
                }),
                takeUntil(this.destroy$)
            )
            .subscribe((response: ProfileResponse) => {
                if (response.id) {
                    this.router.navigate([RoutePaths.USER_DASHBOARD]);
                }
            });
    }

    _navigateToForgotPassword(): void {
        this.router.navigate([RoutePaths.AUTHENTICATION, RoutePaths.FORGOT_PASSWORD]);
    }

    _navigateToRegistration(): void {
        this.router.navigate([RoutePaths.AUTHENTICATION, RoutePaths.REGISTRATION]);
    }

}
