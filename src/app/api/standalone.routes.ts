import { Routes } from "@angular/router";
import { UserDashboardPageComponent } from "../views/user-dashboard-page/user-dashboard-page.component";
import { NavigationBarComponent } from "../modules/common/navigation-bar/navigation-bar.component";

export enum RoutePaths {
    LOGIN = "login",
    USER_DASHBOARD = "user-dashboard",
    LEARN = "learn",
    TEACHER = "teacher",
    PLANNING = "planning",
    CHAT = "chat",
    SETTINGS = "settings",
    LOGOUT = "logout",
}

export const standaloneRoutes: Routes = [
    { path: RoutePaths.USER_DASHBOARD, component: UserDashboardPageComponent },
    { path: RoutePaths.LEARN, component: NavigationBarComponent }, // remove after test
    { path: "**", redirectTo: RoutePaths.USER_DASHBOARD }
];
