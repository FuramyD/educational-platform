import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { EpUnsubscribe } from "../../common/helpers/unsubscribe";
import { switchMap, takeUntil } from "rxjs";
import { ProfileResponse } from "../../models/response.model";
import { UserService } from "../../services/user.service";
import { User } from "../../models/user.model";

@Component({
    selector: "ep-router-page",
    templateUrl: "./router-page.component.html",
    styleUrls: ["./router-page.component.less"]
})
export class RouterPageComponent extends EpUnsubscribe implements OnInit {

    constructor(
        private authService: AuthService,
        private userService: UserService
    ) {
        super();
    }

    _username: string;
    _email: string;

    _courses = [
        { completed: "15%", icon: "", color: "", title: "", description: "" }
    ];

    ngOnInit(): void {
        this.authService.getCurrentProfile()
            .pipe(
                switchMap((profile: ProfileResponse) => {
                    return this.userService.getUserById(profile.id);
                }),
                takeUntil(this.destroy$)
            )
            .subscribe((user: User) => {
                this._username = `${user.firstName} ${user.lastName}`;
                this._email = user.email;
            });
    }
}
