import {LightningElement} from 'lwc';

export default class App extends LightningElement {
    customCtor;
    chapter;

    async loadCtor(event) {
        let ctor;
        switch(event.target.id) {
            case 'prologue':
                this.chapter = 'https://raw.githubusercontent.com/Yabashiri/etrian-odyssey/master/src/client/modules/my/chapterOne/scenes/scene-1.txt';
                break;
            case 'floors12':
                this.chapter = 'https://raw.githubusercontent.com/Yabashiri/etrian-odyssey/master/src/client/modules/my/chapterOne/scenes/scene-2.txt';
                break;
            case 'floors34':
                this.chapter = 'https://raw.githubusercontent.com/Yabashiri/etrian-odyssey/master/src/client/modules/my/chapterOne/scenes/scene-3.txt';
                break;
            default:
                break;
        }
        ctor = await import('../chapterOne/chapterOne');
        if(ctor) {
            this.customCtor = ctor.default;
        }
    }
}
