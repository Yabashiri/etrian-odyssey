import {LightningElement} from "lwc";

export default class CallScreen extends LightningElement {

    async connectedCallback() {
        await fetch('http://localhost:10000/my/app/scene1-txt').then(response => {
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