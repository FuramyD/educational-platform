import { Routes } from "@angular/router";
import { UserDashboardPageComponent } from "../views/user-dashboard-page/user-dashboard-page.component";

export const standaloneRoutes: Routes = [
    { path: "user-dashboard", component: UserDashboardPageComponent },
    { path: "**", redirectTo: "user-dashboard" }
];
