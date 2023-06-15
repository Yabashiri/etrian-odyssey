import {LightningElement} from "lwc";

export default class CallScreen extends LightningElement {

    async connectedCallback() {
        await fetch('https://raw.githubusercontent.com/Yabashiri/etrian-odyssey/master/src/client/modules/my/callScreen/scene-1.txt').
        then(response => {
            return response.text()
        }).then(text => {
            console.log(text);
        });
    }
}