import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormControl, FormGroup, FormGroupDirective, Validators } from "@angular/forms";
import { AuthService } from "../../../../services/auth.service";
import { ReplaySubject, takeUntil } from "rxjs";

@Component({
    selector: "ep-forgot-password",
    templateUrl: "./forgot-password.component.html",
    styleUrls: ["./forgot-password.component.less"],
    providers: [FormGroupDirective]
})
export class ForgotPasswordComponent implements OnInit, OnDestroy {

    public _formGroup: FormGroup;

    public _isSentEmail: boolean = false;

    private destroy$: ReplaySubject<void> = new ReplaySubject<void>();

    constructor(private authService: AuthService) { }

    ngOnInit(): void {
        this._formGroup = new FormGroup({
            email: new FormControl(null, [Validators.required])
        });
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
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
