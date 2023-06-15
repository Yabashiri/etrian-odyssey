import {LightningElement} from 'lwc';
import PORTRAITS from './charactersToPortraits.json'
import IDENTIFIERS from './ruCharactersToIdenfitiers.json';

export default class CallScreen extends LightningElement {

    scene1 = [];
    isLoaded = false;

    async connectedCallback() {
        await fetch('https://raw.githubusercontent.com/Yabashiri/etrian-odyssey/master/src/client/modules/my/callScreen/scene-1.txt').
        then(response => {
            return response.text()
        }).then(text => {
            this.parseScene(text);
        });
    }

    parseScene(text) {
        console.log(text);
        let lines = text.split('\n');
        let i = 1;
        lines.forEach(line => {
           this.scene1.push({...this.parseLine(line), id: 'line' + i++});
        });
        this.isLoaded = true;
        console.log(this.scene1);
    }

    parseLine(line) {
        let separatorIndex = line.indexOf(': ');
        let [identifier, text] = [line.slice(0, separatorIndex), line.slice(separatorIndex + 2)];
        identifier = IDENTIFIERS[identifier];
        return {
            speaker: identifier,
            line: text,
            image: PORTRAITS[identifier]
        };
    }

    kaedePortrait() {
        return 'https://downloader.disk.yandex.ru/preview/4c8bb4f9d00f297039f7c01c2bdf700b033fbe1cc8305cfab73b42dd77e56d7a/648b2e52/6UZa3eiPFsIho9z_rgFcaHrGjrQN2E_saU0LjPWV_Z-E3veOWI3U4fbcjT8w_TXz73V42Qs3ttERMrMbYBub0g%3D%3D?uid=0&filename=kaede.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=0&tknv=v2&size=2048x2048';
        console.log(PORTRAITS.kaede);
        return PORTRAITS.kaede;
    }
}