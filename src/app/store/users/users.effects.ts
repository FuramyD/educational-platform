import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { UserService } from "../../services/user.service";
import { addUsers, setCurrentUser, UsersActionTypes } from "./users.actions";
import { catchError, EMPTY, map, switchMap } from "rxjs";
import { User } from "../../models/user.model";
import { Store } from "@ngrx/store";
import { AuthService } from "../../services/auth.service";
import { ProfileResponse } from "../../models/response.model";

@Injectable()
export class UsersEffects {

    constructor(
        private store: Store,
        private actions$: Actions,
        private userService: UserService,
        private authService: AuthService
    ) {}


    loadAllUsers$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(UsersActionTypes.LoadUsers),
            switchMap(() => this.userService.getAllUsers().pipe(
                map((users: User[]) => addUsers({
                    payload: { users }
                })),
                catchError((error) => { console.error(error); return EMPTY; })
            )),
        );
    });

    loadCurrentUser$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(UsersActionTypes.LoadCurrentUser),
            switchMap(() => this.authService.getCurrentProfile().pipe(
                switchMap((profile: ProfileResponse) => this.userService.getUserById(profile.id)),
                catchError((error) => { console.error(error); return EMPTY; })
            )),
            map((user: User) => setCurrentUser({ payload: user }))
        );
    });
}
