import {LightningElement, api} from "lwc";

export default class CallScreen extends LightningElement {

    @api line;

    get portrait() {
        return this.line.image;
    }

    get height() {
        return this.line.speaker ? '100%' : '300px';
    }
}
