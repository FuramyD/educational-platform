import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { Course } from "../../models/course.model";

export interface CoursesState extends EntityState<Course> {
    openedCourse: Course;
    currentCourses: Course[];
    colors: string[];
}

export const coursesAdapter: EntityAdapter<Course> = createEntityAdapter<Course>({
    selectId: (course: Course) => course.id,
    sortComparer: false
});

export const initialState: CoursesState = coursesAdapter.getInitialState({
    openedCourse: null,
    currentCourses: [ // TODO: need to delete this
        { completed: "15%", icon: "book", name: "Курс 1", description: "SQL" },
        { completed: "25%", icon: "calendar", name: "Курс 2", description: "Python" },
        { completed: "40%", icon: "teacher", name: "Курс 3", description: "Angular" },
        { completed: "74%", icon: "menu", name: "Курс 4", description: "RoR" }
    ],
    colors: ["#008A0E", "#01636C", "#6AA500", "#005A0B"]
});
