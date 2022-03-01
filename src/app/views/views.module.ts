import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserDashboardPageComponent } from "./user-dashboard-page/user-dashboard-page.component";
import { UserDashboardModule } from "../modules/user-dashboard/user-dashboard.module";

@NgModule({
    declarations: [
        UserDashboardPageComponent
    ],
    imports: [
        CommonModule,
        UserDashboardModule
    ]
})
export class ViewsModule { }
