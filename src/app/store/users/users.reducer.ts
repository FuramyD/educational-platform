import { createReducer, on } from "@ngrx/store";
import { initialState, usersAdapter } from "./users.state";
import * as UserActions from "./users.actions";

export const usersFeatureKey: string = "users";

export const usersReducer = createReducer(
    initialState,
    on(UserActions.addUser, (state, action) => usersAdapter.addOne(action.payload.user, state)),
    on(UserActions.addUsers, (state, action) => usersAdapter.addMany(action.payload.users, state)),
    on(UserActions.updateUser, (state, action) => usersAdapter.updateOne(action.payload.user, state)),
    on(UserActions.updateUsers, (state, action) => usersAdapter.updateMany(action.payload.users, state)),
    on(UserActions.upsertUser, (state, action) => usersAdapter.upsertOne(action.payload.user, state)),
    on(UserActions.upsertUsers, (state, action) => usersAdapter.upsertMany(action.payload.users, state)),
    on(UserActions.mapUsers, (state, action) => usersAdapter.map(action.payload.entityMap, state)),
    on(UserActions.deleteUser, (state, action) => usersAdapter.removeOne(action.payload.id, state)),
    on(UserActions.deleteUsers, (state, action) => usersAdapter.removeMany(action.payload.ids, state)),
    on(UserActions.deleteAllUsers, state => usersAdapter.removeAll(state)),
);
