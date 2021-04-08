export interface Message {
    uuid: string;
    content: string;
    createdAt: Date;
    senderUuid: string;
    recipientUuid: string;
}