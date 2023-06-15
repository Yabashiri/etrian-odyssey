import {LightningElement} from "lwc";

export default class CallScreen extends LightningElement {

    async connectedCallback() {
        await fetch('https://raw.githubusercontent.com/Yabashiri/etrian-odyssey/master/src/client/modules/my/callScreen/scene-1.txt').then(response => {
            console.log(response.text());
            console.log(response);
        }).catch(error => {
            console.log(error);
        });

        await fetch('https://example-files.online-convert.com/document/txt/example.txt').then(response => {
            console.log(response.text());
            console.log(response);
        }).catch(error => {
            console.log(error);
        });
    }
}