import { createAction, props } from "@ngrx/store";
import { Chat } from "../../models/chat.model";
import { UpdateStr } from "@ngrx/entity/src/models";

export enum ChatsActionTypes {
    LoadChats = "[Chats] Load chats",
    SetChats = "[Chats] Set chats",
    RemoveChat = "[Chats] Remove chat",
    AddChat = "[Chats] Add chat",
    UpdateChat = "[Chats] Update chat",
}

export const loadChats = createAction(
    ChatsActionTypes.LoadChats,
    props<{ payload: Record<string, string> }>()
);

export const setChats = createAction(
    ChatsActionTypes.SetChats,
    props<{ payload: Chat[] }>()
);

export const addChat = createAction(
    ChatsActionTypes.AddChat,
    props<{ payload: Chat }>()
);

export const removeChat = createAction(
    ChatsActionTypes.RemoveChat,
    props<{ payload: string }>()
);

export const updateChat = createAction(
    ChatsActionTypes.UpdateChat,
    props<{ payload: UpdateStr<Chat> }>()
);
