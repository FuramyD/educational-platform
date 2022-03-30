import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserDashboardPageComponent } from "./user-dashboard-page/user-dashboard-page.component";
import { UserDashboardModule } from "../modules/user-dashboard/user-dashboard.module";
import { RouterPageComponent } from "./router-page/router-page.component";
import { AppRoutingModule } from "../app-routing.module";
import { EpCommonModule } from "../modules/common/common.module";
import { PlanningPageComponent } from "./planning-page/planning-page.component";
import { ChatPageComponent } from "./chat-page/chat-page.component";

@NgModule({
    declarations: [
        UserDashboardPageComponent,
        RouterPageComponent,
        PlanningPageComponent,
        ChatPageComponent
    ],
    imports: [
        CommonModule,
        UserDashboardModule,
        AppRoutingModule,
        EpCommonModule
    ]
})
export class ViewsModule { }
