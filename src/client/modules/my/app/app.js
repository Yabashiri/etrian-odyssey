import {LightningElement} from 'lwc';

export default class App extends LightningElement {
    customCtor;

    async loadCtor() {
        let ctor;
        ctor = await import('../callScreen/callScreen');
        if(ctor) {
            this.customCtor = ctor.default;
        }
    }

    connectedCallback() {
        this.loadCtor();
    }
}
