import {LightningElement} from "lwc";

export default class CallScreen extends LightningElement {

    async connectedCallback() {
        await fetch('scene1-txt').then(response => {
            console.log(response.text());
            console.log(response);
        }).catch(error => {
            console.log(error);
        });

        await fetch('./scene1-txt').then(response => {
            console.log(response.text());
            console.log(response);
        }).catch(error => {
            console.log(error);
        });
    }
}