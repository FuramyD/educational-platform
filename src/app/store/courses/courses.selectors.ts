import { createFeatureSelector, createSelector } from "@ngrx/store";
import { coursesFeatureKey } from "./courses.reducer";
import { coursesAdapter, CoursesState } from "./courses.state";
import { Course } from "../../models/course.model";


export const { selectAll } = coursesAdapter.getSelectors();
export const selectCoursesState = createFeatureSelector<CoursesState>(coursesFeatureKey);

export const selectAllCourses = createSelector(selectCoursesState, selectAll);

export const selectOpenedCourse = createSelector(
    selectCoursesState,
    (state: CoursesState) => state.openedCourse
);

export const selectCourseById = (id: string) => createSelector(
    selectAll,
    (allCourses: Course[]) => allCourses.find(course => course.id === id)
);

export const selectCurrentCourses = createSelector(
    selectCoursesState,
    (state: CoursesState) => state.currentCourses
);

// so bad code... :) colors should have been written in css.
export const selectCoursesColors = createSelector(
    selectCoursesState,
    (state: CoursesState) => state.colors
);
