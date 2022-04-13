import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserDashboardPageComponent } from "./user-dashboard-page/user-dashboard-page.component";
import { UserDashboardModule } from "../modules/user-dashboard/user-dashboard.module";
import { RouterPageComponent } from "./router-page/router-page.component";
import { AppRoutingModule } from "../app-routing.module";
import { EpCommonModule } from "../modules/common/common.module";
import { PlanningPageComponent } from "./planning-page/planning-page.component";
import { ChatPageComponent } from "./chat-page/chat-page.component";
import { ChatsModule } from "../modules/chats/chats.module";
import { CoursesPageComponent } from "./courses-page/courses-page.component";
import { CoursesCreationPageComponent } from "./courses-creation-page/courses-creation-page.component";
import { CoursesModule } from "../modules/courses/courses.module";

@NgModule({
    declarations: [
        UserDashboardPageComponent,
        RouterPageComponent,
        PlanningPageComponent,
        ChatPageComponent,
        CoursesPageComponent,
        CoursesCreationPageComponent
    ],
    imports: [
        CommonModule,
        UserDashboardModule,
        AppRoutingModule,
        EpCommonModule,
        ChatsModule,
        CoursesModule
    ]
})
export class ViewsModule { }
