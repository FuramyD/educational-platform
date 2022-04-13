import { createAction, props } from "@ngrx/store";
import { Chat } from "../../models/chat.model";
import { UpdateStr } from "@ngrx/entity/src/models";

export enum ChatsActionTypes {
    LoadChats = "[Chats] Load Chats",
    SetChats = "[Chats] Set Chats",
    RemoveChat = "[Chats] Remove Chat",
    AddChat = "[Chats] Add Chat",
    UpdateChat = "[Chats] Update Chat",
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
