import {LightningElement, api} from "lwc";
import CHARACTERS from './charactersToPortraits.json';

export default class CallScreen extends LightningElement {

    @api image;

    get portrait() {
        return this.image;
    }
}
