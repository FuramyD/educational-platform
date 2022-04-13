import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { Course } from "../../models/course.model";
import { User } from "../../models/user.model";
import { UserService } from "../../services/user.service";
import { CoursesService } from "../../services/courses.service";
import { CoursesHelper } from "../../common/helpers/courses.helper";
import { GeneralHelper } from "src/app/common/helpers/general.helper";

@Component({
    selector: "ep-user-dashboard-page",
    templateUrl: "./user-dashboard-page.component.html",
    styleUrls: ["./user-dashboard-page.component.less"]
})
export class UserDashboardPageComponent implements OnInit {

    _userId: string;

    courses$: Observable<Course[]>;
    coursesColors$: Observable<string[]>;
    user$: Observable<User>;

    constructor(
        private route: ActivatedRoute,
        private userService: UserService,
        private coursesService: CoursesService
    ) {
        this._userId = route.snapshot.paramMap.get("userId");
    }

    ngOnInit(): void {
        this.courses$ = this.coursesService.selectCurrentCourses();
        this.coursesColors$ = this.coursesService.selectCoursesColors();
        this.user$ = this.userService.selectCurrentUser();
    }

    _prepareCourses(courses: Course[], colors: string[]): (Course & { color: string })[] {
        return CoursesHelper.prepareCourses(courses, colors);
    }

    _getFullName(user: User): string {
        return GeneralHelper.getFullName(user);
    }
}
