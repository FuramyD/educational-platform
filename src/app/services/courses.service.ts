import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Course } from "../models/course.model";
import { Observable, of } from "rxjs";
import {
    selectOpenedCourse,
    selectCoursesColors,
    selectCurrentCourses,
    selectAllCourses
} from "../store/courses/courses.selectors";
import { closeCourse, createCourse, loadCourseById, loadCourses, openCourse } from "../store/courses/courses.actions";
import { RestApiService } from "./rest-api.service";
import { AuthService } from "./auth.service";


@Injectable()
export class CoursesService {

    constructor(
        private store: Store,
        private restApiService: RestApiService,
        private authService: AuthService
    ) {}

    public selectCurrentCourses(): Observable<Course[]> {
        return this.store.select(selectCurrentCourses);
    }

    public selectCoursesColors(): Observable<string[]> {
        return this.store.select(selectCoursesColors);
    }

    public selectOpenedCourse(): Observable<Course> {
        return this.store.select(selectOpenedCourse);
    }

    public selectAllCourses(): Observable<Course[]> {
        return this.store.select<Course[]>(selectAllCourses);
    }

    public loadCourses(parameters: Record<string, string> = {}): void {
        this.store.dispatch(loadCourses({ payload: parameters }));
    }

    public loadCourseById(id: string, open?: boolean): void {
        this.store.dispatch(loadCourseById({ payload: id, open }));
    }

    public createCourse(course: Course): void {
        this.store.dispatch(createCourse({ payload: course }));
    }

    public openCourse(course: Course): void {
        this.store.dispatch(openCourse({ payload: course }));
    }

    public closeCourse(): void {
        this.store.dispatch(closeCourse());
    }

    public getCourses(parameters: Record<string, string>): Observable<Course[]> {
        // return this.restApiService.get<Course[]>("courses", {
        //     request: {
        //         ...this.authService.getAuthorizationOptions(),
        //         params: parameters
        //     }
        // });

        return of([
            { id: "3trq", name: "SQL", direction: "Программирование", duration: 6, image: "", description: "Описание курса",
                themes: [
                    {
                        name: "Тема 1",
                        lessons: [
                            {
                                name: "Урок 1",
                                completed: true,
                                content: `
                                    <p>Вот это <strong>КОНТЕНТ</strong> конечно... :)</p>
                                    <img src="https://cache.desktopnexus.com/thumbseg/1529/1529656-bigthumbnail.jpg" alt="Птичка">
                                ` },
                            { name: "Урок 2", completed: false },
                            { name: "Урок 3", completed: false },
                        ]
                    },
                    {
                        name: "Тема 2",
                        lessons: [
                            { name: "Урок 1", completed: false },
                            { name: "Урок 2", completed: true },
                        ]
                    }
                ]
            },
            { id: "4tweg246yt", name: "JavaScript", direction: "Программирование", duration: 3, image: "" },
            { id: "4t2etg2y2", name: "Angular", direction: "Программирование", duration: 6, image: "" },
            { id: "24y2ewgwh", name: "Spring Boot", direction: "Программирование", duration: 12, image: "" },
            { id: "3tyjukyrq", name: "Python", direction: "Программирование", duration: 6, image: "" },
        ]);
    }

    public getCourseById(id: string): Observable<Course> {
        return this.restApiService.get<Course>("course", {
            request: this.authService.getAuthorizationOptions(),
            urlParameters: { id }
        });
    }

    public createCourseRequest(course: Course): Observable<Course> {
        return this.restApiService.post<Course>("course", course, {
            request: this.authService.getAuthorizationOptions(),
        });
    }
}
