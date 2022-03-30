import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../../../../services/auth.service";
import { ActivatedRoute, Router } from "@angular/router";
import { filter, takeUntil } from "rxjs";
import { EpUnsubscribe } from "../../../../common/helpers/unsubscribe";
import { RoutePaths } from "../../../../api/standalone.routes";

@Component({
    selector: "ep-change-password",
    templateUrl: "./change-password.component.html",
    styleUrls: ["./change-password.component.less"]
})
export class ChangePasswordComponent extends EpUnsubscribe implements OnInit {

    public _formGroup: FormGroup;
    public _error: string = "";

    private userId: string;

    constructor(
        private authService: AuthService,
        private router: Router,
        private activatedRoute: ActivatedRoute
    ) {
        super();
    }

    ngOnInit(): void {
        this.userId = this.activatedRoute.snapshot.queryParams["userId"];
        // this.userId = this.activatedRoute.snapshot.queryParams["userId"];

        this._formGroup = new FormGroup({
            password: new FormControl(null, [Validators.required]),
            repeatPassword: new FormControl(null, [Validators.required])
        });
    }

    _onChangePassword(): void {
        if (this._formGroup.valid) {
            const password = this._formGroup.get("password").value;
            const repeatedPassword = this._formGroup.get("repeatPassword").value;

            if (password !== repeatedPassword) {
                this._error = "Пароли не совпадают";
            } else {
                this.authService.changePassword(this.userId, password)
                    .pipe(
                        filter(Boolean),
                        takeUntil(this.destroy$)
                    )
                    .subscribe(() => this.router.navigate([RoutePaths.AUTHENTICATION, RoutePaths.LOGIN]));
            }
        } else {
            this._error = "Все поля должны быть заполнены";
        }
    }

}
