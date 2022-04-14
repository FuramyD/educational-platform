import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Course, Lesson, Theme } from "../../../../models/course.model";

@Component({
    selector: "ep-course",
    templateUrl: "./course.component.html",
    styleUrls: ["./course.component.less"]
})
export class CourseComponent {

    @Output() closed: EventEmitter<void> = new EventEmitter<void>();

    @Input() course: Course;

    _openedTheme: Theme;
    _openedLesson: Lesson;
    _testIsOpened: boolean;

    set openedTheme(value: Theme) {
        this._openedTheme = value;
        this._openedLesson = null;
        this._testIsOpened = false;
    }

    set openedLesson(value: Lesson) {
        this._openedLesson = value;
        this._testIsOpened = false;
    }

    set openedTest(value: boolean) {
        this._openedTheme = null;
        this._openedLesson = null;
        this._testIsOpened = value;
    }

    constructor() { }

    _closeCourse(): void {
        this.closed.emit();
    }

    _toggleTheme(theme: Theme): void {
        this.openedTheme = this._openedTheme === theme ? null : theme;
    }

    _openTheme(theme: Theme): void {
        this.openedTheme = theme;
    }

    _openLesson(theme: Theme, lesson: Lesson): void {
        this._openTheme(theme);
        this.openedLesson = lesson;
    }

    _openTest(): void {
        this.openedTest = true;
    }

    _closeLesson(lesson: Lesson): void {
        this.openedLesson = null;
    }

}
