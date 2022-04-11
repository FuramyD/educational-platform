import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, FormGroupDirective, Validators } from "@angular/forms";
import { AuthService } from "../../../../services/auth.service";
import { takeUntil } from "rxjs";
import { EMAIL_REGEXP } from "../../../../common/constants/validator.constants";
import { RxUnsubscribe } from "../../../../common/helpers/unsubscribe";

@Component({
    selector: "ep-forgot-password",
    templateUrl: "./forgot-password.component.html",
    styleUrls: ["./forgot-password.component.less"],
    providers: [FormGroupDirective]
})
export class ForgotPasswordComponent extends RxUnsubscribe implements OnInit {

    public _formGroup: FormGroup;

    public _isSentEmail: boolean = false;

    constructor(private authService: AuthService) {
        super();
    }

    ngOnInit(): void {
        this._formGroup = new FormGroup({
            email: new FormControl(null, [Validators.required, Validators.pattern(EMAIL_REGEXP)])
        });
    }

    _onRestorePassword(): void {
        const email = this._formGroup.get("email").value;
        if (this._formGroup.valid) {
            this.authService.restorePassword(email)
                .pipe(takeUntil(this.destroy$))
                .subscribe((sentEmail: boolean) => this._isSentEmail = sentEmail);
        }
    }

}
