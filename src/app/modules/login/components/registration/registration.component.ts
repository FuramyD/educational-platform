import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "src/app/services/auth.service";
import { Router } from "@angular/router";
import { RoutePaths } from "../../../../api/standalone.routes";
import { RegistrationResponse } from "../../../../models/response.model";
import { EMAIL_REGEXP } from "../../../../common/constants/validator.constants";

@Component({
    selector: "ep-registration",
    templateUrl: "./registration.component.html",
    styleUrls: ["./registration.component.less"]
})
export class RegistrationComponent implements OnInit {

    constructor(
        private authService: AuthService,
        private router: Router
    ) {}

    _formGroup: FormGroup;

    ngOnInit(): void {
        this._formGroup = new FormGroup({
            firstName: new FormControl(null, [Validators.required]),
            lastName: new FormControl(null, [Validators.required]),
            email: new FormControl(null, [Validators.required, Validators.pattern(EMAIL_REGEXP)]),
            phone: new FormControl(null, [Validators.required]),
            password: new FormControl(null, [Validators.required])
        });
    }

    _onFormSubmit(): void {
        if (this._formGroup.valid) {
            this.authService.registration(this._formGroup.value).subscribe((response: RegistrationResponse) => {
                this.router.navigate([RoutePaths.AUTHENTICATION, RoutePaths.LOGIN], {
                    queryParams: {
                        message: response.message
                    }
                }).then(() => console.log("Вы были перенаправлены на страницу авторизации."));
            });
        }
    }

    _navigateToLogin(): void {
        this.router.navigate([RoutePaths.AUTHENTICATION, RoutePaths.LOGIN]);
    }

}
