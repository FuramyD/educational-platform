import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { RxUnsubscribe } from "../../common/helpers/unsubscribe";
import { Observable, of } from "rxjs";
import { UserService } from "../../services/user.service";
import { User } from "../../models/user.model";
import { Course } from "../../models/course.model";
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
    _courses$: Observable<Course[]> = of([
        { completed: "15%", icon: "book", title: "Курс 1", description: "SQL" },
        { completed: "25%", icon: "calendar", title: "Курс 2", description: "Python" },
        { completed: "40%", icon: "teacher", title: "Курс 3", description: "Angular" },
        { completed: "74%", icon: "menu", title: "Курс 4", description: "RoR" }
    ]);

    _colors: string[] = ["#008A0E", "#01636C", "#6AA500", "#005A0B"];

    ngOnInit(): void {
        this.userService.loadCurrentUser();
        this._user$ = this.userService.selectCurrentUser();
    }

    _getFullName(user: User): string {
        return GeneralHelper.getFullName(user);
    }

    _prepareCourses(courses: Course[]): (Course & { color: string })[] {
        return courses.map((course, index) => ({
            ...course,
            color: this._colors[index % this._colors.length]
        }));
    }
}
