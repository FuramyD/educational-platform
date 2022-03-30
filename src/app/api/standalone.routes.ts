import { Routes } from "@angular/router";
import { UserDashboardPageComponent } from "../views/user-dashboard-page/user-dashboard-page.component";
import { AuthComponent } from "../modules/login/components/auth/auth.component";
import { LoginComponent } from "../modules/login/components/login/login.component";
import { RegistrationComponent } from "../modules/login/components/registration/registration.component";
import { RouterPageComponent } from "../views/router-page/router-page.component";
import { AuthGuard } from "./auth.guard";
import { ForgotPasswordComponent } from "../modules/login/components/forgot-password/forgot-password.component";
import { PlanningPageComponent } from "../views/planning-page/planning-page.component";
import { ChatPageComponent } from "../views/chat-page/chat-page.component";
import { ChangePasswordComponent } from "../modules/login/components/change-password/change-password.component";


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
    FORGOT_PASSWORD = "forgot-password",
    CHANGE_PASSWORD = "change-password"
}

export const standaloneRoutes: Routes = [
    {
        path: "", pathMatch: "full", redirectTo: RoutePaths.USER_DASHBOARD
    },
    {
        path: RoutePaths.AUTHENTICATION,
        component: AuthComponent,
        children: [
            { path: RoutePaths.LOGIN, component: LoginComponent },
            { path: RoutePaths.REGISTRATION, component: RegistrationComponent },
            { path: RoutePaths.FORGOT_PASSWORD, component: ForgotPasswordComponent },
            { path: RoutePaths.CHANGE_PASSWORD, component: ChangePasswordComponent },
        ]
    },
    {
        path: "",
        component: RouterPageComponent,
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        children: [
            { path: RoutePaths.USER_DASHBOARD, component: UserDashboardPageComponent },
            { path: RoutePaths.LEARN, component: UserDashboardPageComponent },
            { path: RoutePaths.TEACHER, component: UserDashboardPageComponent },
            { path: RoutePaths.PLANNING, component: PlanningPageComponent },
            { path: RoutePaths.CHAT, component: ChatPageComponent },
        ]
    },
    { path: "**", redirectTo: RoutePaths.USER_DASHBOARD }
];
