import { createReducer, on } from "@ngrx/store";
import { coursesAdapter, CoursesState, initialState } from "./courses.state";
import { addCourse, addCourses, closeCourse, openCourse, removeCourse, setCourses } from "./courses.actions";


export const coursesFeatureKey = "courses";

export const coursesReducer = createReducer<CoursesState>(
    initialState,
    on(openCourse, (state, action): CoursesState => ({
        ...state,
        openedCourse: action.payload
    })),
    on(closeCourse, (state): CoursesState => ({
        ...state,
        openedCourse: null
    })),
    on(setCourses, (state, action) => coursesAdapter.setAll(action.payload, state)),
    on(addCourse, (state, action) => coursesAdapter.addOne(action.payload, state)),
    on(addCourses, (state, action) => coursesAdapter.addMany(action.payload, state)),
    on(removeCourse, (state, action) => coursesAdapter.removeOne(action.payload, state)),
);
