import { Component, Inject, OnInit } from "@angular/core";
import { RxUnsubscribe } from "../../../../common/helpers/unsubscribe";
import { AuthService } from "../../../../services/auth.service";
import { takeUntil } from "rxjs";
import { ProfileResponse } from "../../../../models/response.model";
import { Router } from "@angular/router";
import { RoutePaths } from "../../../../api/standalone.routes";
import { LOCAL_STORAGE } from "../../../../common/tokens/browser.tokens";

@Component({
    selector: "ep-auth",
    templateUrl: "./auth.component.html",
    styleUrls: ["./auth.component.less"]
})
export class AuthComponent extends RxUnsubscribe implements OnInit {

    constructor(
        @Inject(LOCAL_STORAGE) private localStorageRef: Storage,
        private authService: AuthService,
        private router: Router
    ) {
        super();
    }

    ngOnInit(): void {
        this.authService.getCurrentProfile()
            .pipe(takeUntil(this.destroy$))
            .subscribe((profile: ProfileResponse) => {
                if (profile) {
                    this.router.navigate([RoutePaths.USER_DASHBOARD]);
                }
            });
    }

    _redirectToLogin(): void {
        this.router.navigate([RoutePaths.AUTHENTICATION, RoutePaths.LOGIN]);
    }
}
