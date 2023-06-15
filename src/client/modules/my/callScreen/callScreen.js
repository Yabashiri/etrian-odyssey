import {LightningElement} from 'lwc';
import PORTRAITS from './charactersToPortraits.json'
import IDENTIFIERS from './ruCharactersToIdenfitiers.json';

export default class CallScreen extends LightningElement {

    scene1 = [];

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
           this.scene1.push(this.parseLine(line));
        });
        console.log(this.scene1);
    }

    parseLine(line) {
        let [identifier, ...text] = line.split(':');
        identifier = IDENTIFIERS[identifier];
        console.log(identifier);
        return {
            speaker: identifier,
            line: text
        };
    }
}