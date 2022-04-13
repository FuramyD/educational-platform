import { AuthService } from "./auth.service";
import { RestApiService } from "./rest-api.service";
import { UserService } from "./user.service";
import { ChatService } from "./chat.service";
import { CoursesService } from "./courses.service";

export const PROVIDED_SERVICES = [
    RestApiService,
    AuthService,
    UserService,
    ChatService,
    CoursesService
];
