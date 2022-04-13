import { createAction, props } from "@ngrx/store";
import { Course } from "../../models/course.model";

export enum CoursesActionTypes {
    OpenCourse = "[Courses] Open Course",
    CloseCourse = "[Courses] Close Course",
    LoadCourseById = "[Courses] Load Course By Id",
    LoadCourses = "[Courses] Load Courses",
    CreateCourse = "[Courses] Create Courses",
    AddCourse = "[Courses] Add Course",
    AddCourses = "[Courses] Add Courses",
    SetCourses = "[Courses] Set Courses",
    RemoveCourse = "[Courses] Remove Courses"
}

export const openCourse = createAction(
    CoursesActionTypes.OpenCourse,
    props<{ payload: Course }>()
);

export const closeCourse = createAction(
    CoursesActionTypes.CloseCourse
);

export const loadCourseById = createAction(
    CoursesActionTypes.LoadCourseById,
    props<{ payload: string, open?: boolean }>()
);

export const loadCourses = createAction(
    CoursesActionTypes.LoadCourses,
    props<{ payload: Record<string, string> }>()
);

export const setCourses = createAction(
    CoursesActionTypes.SetCourses,
    props<{ payload: Course[] }>()
);


export const addCourse = createAction(
    CoursesActionTypes.AddCourse,
    props<{ payload: Course }>()
);

export const addCourses = createAction(
    CoursesActionTypes.AddCourses,
    props<{ payload: Course[] }>()
);

export const removeCourse = createAction(
    CoursesActionTypes.RemoveCourse,
    props<{ payload: string }>()
);

export const createCourse = createAction(
    CoursesActionTypes.CreateCourse,
    props<{ payload: Course }>()
);
