import {LightningElement} from "lwc";

export default class CallScreen extends LightningElement {

    async connectedCallback() {
        await fetch('https://example-files.online-convert.com/document/txt/example.txt').then(response => {
            console.log(response);
            console.log('test')
        }).catch(error => {
            console.log(error);
        });
    }
}