import {LightningElement} from 'lwc';
import PORTRAITS from './charactersToPortraits.json'
import IDENTIFIERS from './ruCharactersToIdenfitiers.json';

export default class CallScreen extends LightningElement {

    scene1 = [];
    isLoaded = false;

    constructor() {
        super();
        const styles = document.createElement('link');
        styles.href = './resources/css/bootstrap.min.css';
        styles.rel = 'stylesheet';
        this.template.appendChild(styles);
    }

    async connectedCallback() {
        await fetch('https://raw.githubusercontent.com/Yabashiri/etrian-odyssey/master/src/client/modules/my/callScreen/scene-1.txt').
        then(response => {
            return response.text()
        }).then(text => {
            this.parseScene(text);
        });
    }

    parseScene(text) {
        let lines = text.split('\n');
        let i = 1;
        lines.forEach(line => {
           this.scene1.push({...this.parseLine(line), id: 'line' + i++});
        });
        this.isLoaded = true;
    }

    parseLine(line) {
        if(line.startsWith('https')) {
            return {image: line};
        }
        let separatorIndex = line.indexOf(': ');
        let [identifier, text] = [line.slice(0, separatorIndex), line.slice(separatorIndex + 2)];
        identifier = IDENTIFIERS[identifier];
        return {
            speaker: identifier,
            line: text,
            image: PORTRAITS[identifier],
            story: identifier === 'none'
        };
    }
}