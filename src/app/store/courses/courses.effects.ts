import { CoursesService } from "src/app/services/courses.service";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { addCourse, CoursesActionTypes, openCourse, setCourses } from "./courses.actions";
import { map, mergeMap, pluck, switchMap } from "rxjs";
import { Course } from "../../models/course.model";
import { Injectable } from "@angular/core";

@Injectable()
export class CoursesEffects {

    constructor(
        private action$: Actions,
        private store: Store,
        private coursesService: CoursesService,
    ) {}


    loadCourses$ = createEffect(() => {
        return this.action$.pipe(
            ofType(CoursesActionTypes.LoadCourses),
            pluck("payload"),
            switchMap((parameters: Record<string, string>) => this.coursesService.getCourses(parameters)),
            map((courses: Course[]) => setCourses({ payload: courses }))
        );
    });

    loadCourseById$ = createEffect(() => {
        return this.action$.pipe(
            ofType(CoursesActionTypes.LoadCourseById),
            switchMap(({ payload: id, open }) => this.coursesService.getCourseById(id)),
            switchMap((course: Course) => [
                addCourse({ payload: course }),
                openCourse({ payload: course })
            ])
        );
    });

    createCourse$ = createEffect(() => {
        return this.action$.pipe(
            ofType(CoursesActionTypes.CreateCourse),
            pluck("payload"),
            mergeMap((course: Course) => this.coursesService.createCourseRequest(course)),
            map((course: Course) => addCourse({ payload: course }))
        );
    });
}
