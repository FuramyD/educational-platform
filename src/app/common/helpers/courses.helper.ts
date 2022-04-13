import { Course } from "../../models/course.model";


export class CoursesHelper {

    public static prepareCourses(courses: Course[], colors: string[]): (Course & { color: string })[] {
        return courses.map((course: Course, index: number) => ({
            ...course,
            color: colors[index % colors.length]
        }));
    }
}
