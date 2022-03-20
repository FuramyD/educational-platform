import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserDashboardComponent } from "./components/user-dashboard/user-dashboard.component";
import { SvgIconsModule } from "@ngneat/svg-icon";



@NgModule({
    declarations: [
        UserDashboardComponent
    ],
    exports: [
        UserDashboardComponent
    ],
    imports: [
        CommonModule,
        SvgIconsModule
    ]
})
export class UserDashboardModule { }
