import { Component, OnInit } from "@angular/core";
import { BehaviorSubject, Observable, of } from "rxjs";
import { Chat } from "../../../../models/chat.model";
import { UserService } from "../../../../services/user.service";
import { User } from "../../../../models/user.model";

@Component({
    selector: "ep-chats-list",
    templateUrl: "./chats-list.component.html",
    styleUrls: ["./chats-list.component.less"]
})
export class ChatsListComponent implements OnInit {

    private openChat$: BehaviorSubject<Chat> = new BehaviorSubject<Chat>(null);

    chats$: Observable<Chat[]>;
    user$: Observable<User>;
    openedChat$: Observable<Chat> = this.openChat$.asObservable();

    constructor(
        private userService: UserService
    ) { }

    ngOnInit(): void {
        this.userService.loadCurrentUser();
        this.user$ = this.userService.selectCurrentUser();
        const testDate = new Date();
        this.chats$ = of([
            {
                id: "1",
                chatPartners: [{ id: "user1", firstName: "Владимир" }],
                messages: [
                    { creationDate: testDate.toISOString(), content: { text: "Сообщение 1" } },
                    { creationDate: testDate.toISOString(), content: { text: "Сообщение 2" } },
                    { creationDate: testDate.toISOString(), content: { text: "Сообщение 3" } },
                    { creationDate: testDate.toISOString(), senderId: "6232512339eb31d56a06899e", content: { text: "Сообщение 4" } },
                    { creationDate: testDate.toISOString(), content: { text: "Сообщение 5" } },
                    { creationDate: testDate.toISOString(), senderId: "6232512339eb31d56a06899e", content: { text: "Сообщение 6" } }
                ]
            },
            {
                id: "2",
                chatPartners: [{ id: "user1", firstName: "Александр" }],
                messages: [{ creationDate: testDate.toISOString(), senderId: "6232512339eb31d56a06899e", content: { text: "Сообщение 2" } }]
            },
            {
                id: "3",
                chatPartners: [{ id: "user1", firstName: "Дмитрий" }],
                messages: [{ creationDate: testDate.toISOString(), content: { text: "Сообщение 3" } }]
            }
        ]);
    }

    _openChat(chat: Chat): void {
        this.openChat$.next(chat);
    }

    _closeChat(): void {
        this.openChat$.next(null);
    }

}
