import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { RxUnsubscribe } from "../../common/helpers/unsubscribe";
import { Observable } from "rxjs";
import { UserService } from "../../services/user.service";
import { User } from "../../models/user.model";
import { GeneralHelper } from "../../common/helpers/general.helper";

@Component({
    selector: "ep-router-page",
    templateUrl: "./router-page.component.html",
    styleUrls: ["./router-page.component.less"]
})
export class RouterPageComponent extends RxUnsubscribe implements OnInit {

    constructor(
        private authService: AuthService,
        private userService: UserService
    ) {
        super();
    }

    _user$: Observable<User>;

    ngOnInit(): void {
        this.userService.loadCurrentUser();
        this._user$ = this.userService.selectCurrentUser();


    }

    _getFullName(user: User): string {
        return GeneralHelper.getFullName(user);
    }
}
