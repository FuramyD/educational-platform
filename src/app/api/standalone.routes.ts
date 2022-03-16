import { Routes } from "@angular/router";
import { UserDashboardPageComponent } from "../views/user-dashboard-page/user-dashboard-page.component";
import { NavigationBarComponent } from "../modules/common/navigation-bar/navigation-bar.component";
import { AuthComponent } from "../modules/login/components/auth/auth.component";
import { LoginComponent } from "../modules/login/components/login/login.component";
import { RegistrationComponent } from "../modules/login/components/registration/registration.component";
import { RouterPageComponent } from "../views/router-page/router-page.component";
import { AuthGuard } from "./auth.guard";


export enum RoutePaths {
    AUTHENTICATION = "auth",
    LOGIN = "login",
    REGISTRATION = "registration",
    USER_DASHBOARD = "user-dashboard",
    LEARN = "learn",
    TEACHER = "teacher",
    PLANNING = "planning",
    CHAT = "chat",
    SETTINGS = "settings",
    LOGOUT = "logout",
    FORGOT_PASSWORD = "forgot-password"
}

export const standaloneRoutes: Routes = [
    {
        path: RoutePaths.AUTHENTICATION,
        component: AuthComponent,
        children: [
            { path: RoutePaths.LOGIN, component: LoginComponent },
            { path: RoutePaths.REGISTRATION, component: RegistrationComponent },
        ]
    },
    {
        path: "",
        component: RouterPageComponent,
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        children: [
            { path: RoutePaths.USER_DASHBOARD, component: UserDashboardPageComponent },
            { path: RoutePaths.LEARN, component: NavigationBarComponent } // remove after test
        ]
    },
    { path: "**", redirectTo: RoutePaths.USER_DASHBOARD }
];
