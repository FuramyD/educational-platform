import { NgModule } from "@angular/core";
import { ActionReducerMap, StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { usersFeatureKey, usersReducer } from "./users/users.reducer";
import { UsersEffects } from "./users/users.effects";
import { chatsFeatureKey, chatsReducer } from "./chats/chats.reducer";

export const reducers: ActionReducerMap<any> = {
    [usersFeatureKey]: usersReducer,
    [chatsFeatureKey]: chatsReducer
};

@NgModule({
    imports: [
        EffectsModule.forFeature([UsersEffects]),
        StoreModule.forRoot(reducers),
    ]
})
export class EpStoreModule { }
