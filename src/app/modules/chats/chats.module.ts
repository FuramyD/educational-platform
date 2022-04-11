import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ChatsListComponent } from "./components/chats-list/chats-list.component";
import { ChatComponent } from "./components/chat/chat.component";
import { ChatItemComponent } from "./components/chat-item/chat-item.component";



@NgModule({
    declarations: [
        ChatsListComponent,
        ChatComponent,
        ChatItemComponent
    ],
    exports: [
        ChatsListComponent
    ],
    imports: [
        CommonModule
    ]
})
export class ChatsModule { }
