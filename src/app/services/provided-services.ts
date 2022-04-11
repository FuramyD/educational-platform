import { AuthService } from "./auth.service";
import { RestApiService } from "./rest-api.service";
import { UserService } from "./user.service";
import { ChatService } from "./chat.service";

export const PROVIDED_SERVICES = [
    AuthService,
    RestApiService,
    UserService,
    ChatService
];
