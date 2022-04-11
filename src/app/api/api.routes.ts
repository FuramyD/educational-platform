import { RestApiRoutes } from "../models/rest-api.model";
import { environment } from "../../environments/environment";

export const socketGateWay = environment.production ? "" : "http://localhost:80";
export const apiRoutes: RestApiRoutes = {
    gateways: {
        publicGateWay: environment.production ? "" : "http://localhost:3000",
    },
    urls: {
        login: "auth/login",
        registration: "auth/registration",
        profile: "auth/profile",
        refresh: "auth/refresh",
        logout: "auth/logout",
        restorePassword: "auth/restore-password",
        changePassword: "auth/change-password",
        getUserById: "users/{id}", // example for url
        hello: "hello"
    }
};
