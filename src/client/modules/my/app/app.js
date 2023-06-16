import {LightningElement} from 'lwc';

export default class App extends LightningElement {
    customCtor;

    async loadCtor() {
        let ctor;
        ctor = await import('../chapterOne/chapterOne');
        if(ctor) {
            this.customCtor = ctor.default;
        }
    }

    connectedCallback() {
        this.loadCtor();
    }
}
