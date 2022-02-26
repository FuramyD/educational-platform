import { Injectable } from "@angular/core";
import { User } from "../models/user.model";
import { Observable } from "rxjs";
import { RestApiService } from "./rest-api.service";
import { AuthService } from "./auth.service";

@Injectable({
    providedIn: "root"
})
export class UserService {

    constructor(
        private restApiService: RestApiService,
        private authService: AuthService
    ) { }

    public getUserById(id: string): Observable<User> {
        return this.restApiService.get<User>("getUserById", {
            urlParameters: { id },
            request: {
                ...this.authService.getAuthorizationParams()
            }
        });
    }
}
