import { createFeatureSelector, createSelector } from "@ngrx/store";
import { usersFeatureKey } from "./users.reducer";
import { usersAdapter, UsersState } from "./users.state";
import { User } from "../../models/user.model";
import { Dictionary } from "@ngrx/entity";

const { selectIds, selectEntities, selectAll, selectTotal } = usersAdapter.getSelectors();

export const selectUsersState = createFeatureSelector<UsersState>(usersFeatureKey);

export const selectUserIds = createSelector(selectUsersState, selectIds);
export const selectAllUsers = createSelector(selectUsersState, selectAll);
export const selectAllEntities = createSelector(selectUsersState, selectEntities);
export const selectUsersTotal = createSelector(selectUsersState, selectTotal);

export const selectCurrentUserId = createSelector(
    selectUsersState,
    (state: UsersState) => state.currentUserId
);

export const selectCurrentUser = createSelector(
    selectAllEntities,
    selectCurrentUserId,
    (users: Dictionary<User>, userId: string) => userId && users[userId]
);

export const selectUserById = (id: string) => createSelector(
    selectAllUsers,
    (users: User[]) => users.find(user => user.id === id)
);

