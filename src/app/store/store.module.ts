import { NgModule } from "@angular/core";
import { ActionReducerMap, StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { usersFeatureKey, usersReducer } from "./users/users.reducer";
import { UsersEffects } from "./users/users.effects";
import { chatsFeatureKey, chatsReducer } from "./chats/chats.reducer";
import { ChatsEffects } from "./chats/chats.effects";
import { CoursesEffects } from "./courses/courses.effects";
import { coursesFeatureKey, coursesReducer } from "./courses/courses.reducer";

export const reducers: ActionReducerMap<any> = {
    [usersFeatureKey]: usersReducer,
    [chatsFeatureKey]: chatsReducer,
    [coursesFeatureKey]: coursesReducer
};

@NgModule({
    imports: [
        EffectsModule.forFeature([UsersEffects, ChatsEffects, CoursesEffects]),
        StoreModule.forRoot(reducers),
    ]
})
export class EpStoreModule { }
