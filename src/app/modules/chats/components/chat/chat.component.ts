import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Chat, Message, MessageType } from "../../../../models/chat.model";
import { User } from "../../../../models/user.model";
import { map, Observable, of, takeUntil } from "rxjs";
import { ChatService } from "../../../../services/chat.service";
import { RxUnsubscribe } from "../../../../common/helpers/unsubscribe";

@Component({
    selector: "ep-chat",
    templateUrl: "./chat.component.html",
    styleUrls: ["./chat.component.less"]
})
export class ChatComponent extends RxUnsubscribe implements OnInit {

    @Input() chat: Chat;
    @Input() currentUser: User;

    @Output() closeChat: EventEmitter<void> = new EventEmitter<void>();

    constructor(private chatService: ChatService) {
        super();
    }

    initialMessages$: Observable<Map<string, Message[]>>;
    messages$: Observable<Map<string, Message[]>>;

    ngOnInit(): void {
        this.initialMessages$ = of(this.prepareChatMessages(this.chat.messages));
        this.messages$ = this.chatService.listenChat(this.chat.id).pipe(
            map((messages: Message[]) => this.prepareChatMessages(messages)),
            takeUntil(this.destroy$)
        );
    }

    private static splitMessagesByDate(messages: Message[]): Map<string, Message[]> {
        return messages.reduce((map: Map<string, Message[]>, message: Message) => {
            if (map.has(message.creationDate)) {
                map.get(message.creationDate).push(message);
            } else {
                map.set(message.creationDate, [message]);
            }

            return map;
        }, new Map<string, Message[]>());
    }

    private prepareChatMessages(messages: Message[]): Map<string, Message[]> {
        return ChatComponent.splitMessagesByDate(messages.map((message: Message) => {
            const { senderId } = message;
            const creationDate = new Date(message.creationDate);
            creationDate.setHours(0, 0, 0, 0);

            message.creationDate = creationDate.toISOString();
            message.type = senderId === this.currentUser?.id ? MessageType.OUT : MessageType.IN;

            return message;
        }));
    }

}
