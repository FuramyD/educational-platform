import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CoursesListComponent } from "./components/courses-list/courses-list.component";
import { CoursesCreationComponent } from "./components/courses-creation/courses-creation.component";
import { CoursesFiltersComponent } from "./components/courses-filters/courses-filters.component";
import { CourseComponent } from "./components/course/course.component";
import { EpCommonModule } from "../common/common.module";
import { SvgIconsModule } from "@ngneat/svg-icon";



@NgModule({
    declarations: [
        CoursesListComponent,
        CoursesCreationComponent,
        CoursesFiltersComponent,
        CourseComponent
    ],
    exports: [
        CoursesListComponent,
        CoursesFiltersComponent
    ],
    imports: [
        CommonModule,
        EpCommonModule,
        SvgIconsModule
    ]
})
export class CoursesModule { }
