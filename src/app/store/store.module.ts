import { NgModule } from "@angular/core";
import { ActionReducerMap, StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { usersFeatureKey, usersReducer } from "./users/users.reducer";
import { UsersEffects } from "./users/users.effects";

export const reducers: ActionReducerMap<any> = {
    [usersFeatureKey]: usersReducer
};

@NgModule({
    imports: [
        EffectsModule.forFeature([UsersEffects]),
        StoreModule.forFeature(usersFeatureKey, reducers)
    ]
})
export class EpStoreModule { }
