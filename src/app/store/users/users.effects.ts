import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { UserService } from "../../services/user.service";
import { addUsers, UsersActionTypes } from "./users.actions";
import { catchError, EMPTY, map, switchMap, tap } from "rxjs";
import { User } from "../../models/user.model";
import { Store } from "@ngrx/store";

@Injectable()
export class UsersEffects {

    constructor(
        private store: Store,
        private actions$: Actions,
        private userService: UserService
    ) {}


    loadAllUsers$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(UsersActionTypes.LoadUsers),
            switchMap(() => this.userService.getAllUsers().pipe(
                tap((users: User[]) => {}),
                map((users: User[]) => addUsers({
                    payload: { users }
                })),
                catchError((error) => { console.error(error); return EMPTY; })
            )),
        );
    });
}
