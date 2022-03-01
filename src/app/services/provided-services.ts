import { AuthService } from "./auth.service";
import { RestApiService } from "./rest-api.service";
import { UserService } from "./user.service";

export const PROVIDED_SERVICES = [
    AuthService,
    RestApiService,
    UserService
];
