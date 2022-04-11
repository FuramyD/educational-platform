import { createFeatureSelector, createSelector } from "@ngrx/store";
import { usersFeatureKey } from "./users.reducer";
import { usersAdapter, UsersState } from "./users.state";
import { User } from "../../models/user.model";

const { selectIds, selectEntities, selectAll, selectTotal } = usersAdapter.getSelectors();

export const selectUsersState = createFeatureSelector<UsersState>(usersFeatureKey);

export const selectUserIds = createSelector(selectUsersState, selectIds);
export const selectAllUsers = createSelector(selectUsersState, selectAll);
export const selectAllEntities = createSelector(selectUsersState, selectEntities);
export const selectUsersTotal = createSelector(selectUsersState, selectTotal);

export const selectCurrentUser = createSelector(
    selectUsersState,
    (state: UsersState) => {
        return state.currentUser;
    }
);


export const selectUserById = (id: string) => createSelector(
    selectAllUsers,
    (users: User[]) => users.find(user => user.id === id)
);

