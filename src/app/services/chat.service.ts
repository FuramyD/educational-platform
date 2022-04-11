import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { loadChats } from "../store/chats/chats.actions";
import { Observable } from "rxjs";
import { Chat, Message } from "../models/chat.model";
import { selectAllChats, selectCurrentChat } from "../store/chats/chats.selectors";
import { Socket } from "ngx-socket-io";


@Injectable()
export class ChatService {

    constructor(
        private store: Store,
        private socket: Socket
    ) {}

    public loadChats(parameters: Record<string, string> = {}): void {
        this.store.dispatch(loadChats({ payload: parameters }));
    }

    public selectChats(): Observable<Chat[]> {
        return this.store.select(selectAllChats);
    }

    public selectCurrentChat(): Observable<Chat> {
        return this.store.select(selectCurrentChat);
    }

    public listenChat(chatId: string): Observable<Message[]> {
        return this.socket.fromEvent("message");
    }
}
