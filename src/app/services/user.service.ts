import { Injectable } from "@angular/core";
import { User } from "../models/user.model";
import { Observable } from "rxjs";
import { RestApiService } from "./rest-api.service";
import { AuthService } from "./auth.service";
import { Store } from "@ngrx/store";
import { selectCurrentUser } from "../store/users/users.selectors";
import { loadCurrentUser } from "../store/users/users.actions";

@Injectable({
    providedIn: "root"
})
export class UserService {

    constructor(
        private restApiService: RestApiService,
        private authService: AuthService,
        private store: Store
    ) { }

    public getUserById(id: string): Observable<User> {
        return this.restApiService.get<User>("getUserById", {
            urlParameters: { id },
            request: this.authService.getAuthorizationOptions()
        });
    }

    public getAllUsers(): Observable<User[]> {
        return this.restApiService.get<User[]>("getAllUsers", {
            request: this.authService.getAuthorizationOptions()
        });
    }

    public loadCurrentUser(): void {
        this.store.dispatch(loadCurrentUser());
    }

    public selectCurrentUser(): Observable<User> {
        return this.store.select(selectCurrentUser);
    }
}
