import { createAction, props } from "@ngrx/store";
import { User } from "../../models/user.model";
import { EntityMap, Update } from "@ngrx/entity";

export enum UsersActionTypes {
    LoadUsers = "[Users] Load all users",
    AddUser = "[Users] add user",
    AddUsers = "[Users] add users",
    UpsertUser = "[Users] upsert user",
    UpsertUsers = "[Users] upsert users",
    UpdateUser = "[Users] update user",
    UpdateUsers = "[Users] update users",
    MapUsers = "[Users] map users",
    DeleteUser = "[Users] delete user",
    DeleteUsers = "[Users] delete users",
    DeleteAllUsers = "[Users] delete all users"
}

export const loadAllUsers = createAction(
    UsersActionTypes.LoadUsers
);

export const addUser = createAction(
    UsersActionTypes.AddUser,
    props<{
        payload: { user: User }
    }>()
);

export const addUsers = createAction(
    UsersActionTypes.AddUsers,
    props<{
        payload: { users: User[] }
    }>()
);

export const upsertUser = createAction(
    UsersActionTypes.UpsertUser,
    props<{
        payload: { user: User }
    }>()
);

export const upsertUsers = createAction(
    UsersActionTypes.UpsertUsers,
    props<{
        payload: { users: User[] }
    }>()
);

export const updateUser = createAction(
    UsersActionTypes.UpdateUser,
    props<{
        payload: { user: Update<User> }
    }>()
);

export const updateUsers = createAction(
    UsersActionTypes.UpdateUsers,
    props<{
        payload: { users: Update<User>[] }
    }>()
);

export const mapUsers = createAction(
    UsersActionTypes.MapUsers,
    props<{
        payload: { entityMap: EntityMap<User> }
    }>()
);

export const deleteUser = createAction(
    UsersActionTypes.DeleteUser,
    props<{
        payload: { id: string }
    }>()
);

export const deleteUsers = createAction(
    UsersActionTypes.DeleteUsers,
    props<{
        payload: { ids: string[] }
    }>()
);

export const deleteAllUsers = createAction(
    UsersActionTypes.DeleteAllUsers
);
