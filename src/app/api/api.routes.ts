import { RestApiRoutes } from "../models/rest-api.model";

export const apiRoutes: RestApiRoutes = {
    gateways: {
        publicGateWay: "http://localhost:8080"
    },
    urls: {
        getUserById: "user-management-core-service/user-management/user/{id}", // example for url
        hello: "hello"
    }
};
