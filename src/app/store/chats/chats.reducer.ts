import { createReducer, on } from "@ngrx/store";
import { initialState, chatsAdapter } from "./chats.state";
import * as ChatActions from "./chats.actions";

export const chatsFeatureKey: string = "chats";

export const chatsReducer = createReducer(
    initialState,
    on(ChatActions.setChats, (state, action) => chatsAdapter.setAll(action.payload, state)),
    on(ChatActions.addChat, (state, action) => chatsAdapter.addOne(action.payload, state)),
    on(ChatActions.updateChat, (state, action) => chatsAdapter.updateOne(action.payload, state)),
    on(ChatActions.removeChat, (state, action) => chatsAdapter.removeOne(action.payload, state)),
);
