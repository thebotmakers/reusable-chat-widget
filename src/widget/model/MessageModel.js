export default class MessageModel {

    constructor({ id = '', from = '', text = '', quick_replies = '', type = '', sent = false } = {}) {
        this.id = id;
        this.from = from;
        this.text = text;
        this.quick_replies = quick_replies;
        this.type = type;
        this.sent = sent;
    }
}