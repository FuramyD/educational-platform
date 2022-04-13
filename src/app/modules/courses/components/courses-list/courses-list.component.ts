import { Component, Input, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { CoursesService } from "src/app/services/courses.service";
import { Course } from "../../../../models/course.model";

@Component({
    selector: "ep-courses-list",
    templateUrl: "./courses-list.component.html",
    styleUrls: ["./courses-list.component.less"]
})
export class CoursesListComponent implements OnInit {

    @Input() set courseId(id: string) {
        id && this.coursesService.loadCourseById(id, true);
    }

    courses$: Observable<Course[]>;
    openedCourse$: Observable<Course>;

    constructor(
        private coursesService: CoursesService
    ) {}

    ngOnInit(): void {
        this.coursesService.loadCourses();

        this.openedCourse$ = this.coursesService.selectOpenedCourse();
        this.courses$ = this.coursesService.selectAllCourses();
    }

    _onCloseCourse(): void {
        this.coursesService.closeCourse();
    }

    _openCourse(course: Course): void {
        this.coursesService.openCourse(course);
    }

}
