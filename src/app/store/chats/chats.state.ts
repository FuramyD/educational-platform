import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { Chat } from "../../models/chat.model";

export interface ChatsState extends EntityState<Chat> {
    currentChat: Chat;
}

export const chatsAdapter: EntityAdapter<Chat> = createEntityAdapter<Chat>({
    selectId: (chat: Chat) => chat.id,
    sortComparer: false
});

export const initialState: ChatsState = chatsAdapter.getInitialState({
    currentChat: null
});
