import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Chat, Message } from "../../../../models/chat.model";
import { User } from "../../../../models/user.model";
import { GeneralHelper } from "../../../../common/helpers/general.helper";

@Component({
    selector: "ep-chat-item",
    templateUrl: "./chat-item.component.html",
    styleUrls: ["./chat-item.component.less"]
})
export class ChatItemComponent {

    @Input() chat: Chat;
    @Input() currentId: string = "6232512339eb31d56a06899e";

    @Output() openChat: EventEmitter<Chat> = new EventEmitter<Chat>();

    constructor() { }

    _getLastMessage(messages: Message[]): Message {
        return messages.slice(-1)[0];
    }

    _getChatTitle(): string {
        if (this.chat.title) {
            return this.chat.title;
        }

        let title = "";
        const chatPartners: User[] = this.chat.chatPartners;

        if (chatPartners.length === 1) {
            const [partner] = chatPartners;
            title = GeneralHelper.getFullName(partner);
        }

        if (chatPartners.length > 1) {
            title = chatPartners.map(GeneralHelper.getFullName).join(", ").slice(0, 36);
            if (title.length === 36) {
                return `${title}...`;
            }
        }

        return title;
    }

    _openChat(): void {
        this.openChat.emit(this.chat);
    }

}
