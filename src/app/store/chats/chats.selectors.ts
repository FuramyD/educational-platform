import { createFeatureSelector, createSelector } from "@ngrx/store";
import { chatsAdapter, ChatsState } from "./chats.state";
import { chatsFeatureKey } from "./chats.reducer";

const { selectEntities, selectAll, selectTotal } = chatsAdapter.getSelectors();

export const selectChatsState = createFeatureSelector<ChatsState>(chatsFeatureKey);

export const selectAllChats = createSelector(selectChatsState, selectAll);
export const selectAllEntities = createSelector(selectChatsState, selectEntities);
export const selectChatsTotal = createSelector(selectChatsState, selectTotal);

export const selectCurrentChat = createSelector(
    selectChatsState,
    (state: ChatsState) => state.currentChat
);
