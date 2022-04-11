import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { User } from "../../models/user.model";

export interface UsersState extends EntityState<User> {
    currentUser: User;
}

export const usersAdapter: EntityAdapter<User> = createEntityAdapter<User>({
    selectId: (user: User) => user.id,
    sortComparer: false
});

export const initialState: UsersState = usersAdapter.getInitialState({
    currentUser: null
});
