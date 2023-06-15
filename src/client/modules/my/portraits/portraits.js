import {LightningElement, api} from "lwc";

export default class CallScreen extends LightningElement {

    @api speaker;

    get kaede() {
        return this.speaker === 'kaede';
    }

    get iruma() {
        return this.speaker === 'iruma';
    }

    get ryoko() {
        return this.speaker === 'ryoko';
    }

    get rantaro() {
        return this.speaker === 'rantaro';
    }

    get kirumi() {
        return this.speaker === 'kirumi';
    }
}
