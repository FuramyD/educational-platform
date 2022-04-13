import { Component, Inject, OnDestroy, OnInit, ViewEncapsulation } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../../../../services/auth.service";
import { Router } from "@angular/router";
import { RoutePaths } from "../../../../api/standalone.routes";
import { catchError, EMPTY, takeUntil } from "rxjs";
import { ProfileResponse } from "../../../../models/response.model";
import { LOCAL_STORAGE, LOCATION } from "../../../../common/tokens/browser.tokens";
import { HttpErrorResponse } from "@angular/common/http";
import { RxUnsubscribe } from "../../../../common/helpers/unsubscribe";
import { CREDENTIALS } from "../../../../common/constants/api.constants";
import { LoginParameters } from "../../../../models/login.model";

@Component({
    selector: "ep-login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.less"],
    encapsulation: ViewEncapsulation.None
})
export class LoginComponent extends RxUnsubscribe implements OnInit, OnDestroy {

    constructor(
        @Inject(LOCATION) private locationRef: Location,
        @Inject(LOCAL_STORAGE) private localStorageRef: Storage,
        private router: Router,
        private authService: AuthService
    ) {
        super();
    }

    _formGroup: FormGroup;
    _message: string;
    _error: string;

    ngOnInit(): void {
        const credentials: LoginParameters = JSON.parse(this.localStorageRef.getItem(CREDENTIALS));
        this._message = new URLSearchParams().get("message")?.[0];

        this._formGroup = new FormGroup({
            login: new FormControl(credentials?.login ?? null, [Validators.required]),
            password: new FormControl(credentials?.password ?? null, [Validators.required]),
            rememberMe: new FormControl(credentials?.rememberMe ?? null, [Validators.required])
        });
    }

    _onFormSubmit(): void {
        const rememberMe = this._formGroup.get("rememberMe").value;
        if (rememberMe) {
            this.localStorageRef.setItem(CREDENTIALS, JSON.stringify(this._formGroup.value));
        } else {
            this.localStorageRef.removeItem(CREDENTIALS);
        }
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
