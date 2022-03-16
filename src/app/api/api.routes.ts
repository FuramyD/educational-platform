import { RestApiRoutes } from "../models/rest-api.model";

export const apiRoutes: RestApiRoutes = {
    gateways: {
        publicGateWay: "http://localhost:3000"
    },
    urls: {
        login: "auth/login",
        registration: "auth/registration",
        refresh: "auth/refresh",
        logout: "auth/logout",
        getUserById: "user-management-core-service/user-management/user/{id}", // example for url
        hello: "hello"
    }
};
