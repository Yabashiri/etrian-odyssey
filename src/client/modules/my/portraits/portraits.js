import {LightningElement, api} from "lwc";
import CHARACTERS from './charactersToPortraits.json';

export default class CallScreen extends LightningElement {

    @api speaker;

    get portrait() {
        switch(this.speaker) {
            case 'kaede':
                return CHARACTERS.kaede;
            case 'ryoko':
                return CHARACTERS.ryoko;
            case 'iruma':
                return CHARACTERS.iruma;
            case 'rantaro':
                return CHARACTERS.rantaro;
            case 'kirumi':
                return CHARACTERS.kirumi;
            default:
                return '';
        }
    }
}
