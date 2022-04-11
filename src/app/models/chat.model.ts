import { User } from "./user.model";

export enum MessageType {
    IN = "in",
    OUT = "out"
}

export interface Chat {
    id?: string;
    title?: string;
    chatPartners?: User[];
    messages?: Message[]
}

export interface Message {
    id?: string;
    senderId?: User["id"]
    creationDate?: string;
    modifiedDate?: string;
    content?: MessageContent;
    type?: MessageType
}

export interface MessageContent {
    text?: string;
    attachments?: Attachment[]
}

export interface Attachment {

}
