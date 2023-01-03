import { LightningElement, api } from 'lwc';
 
export default class SetterChildDemo extends LightningElement {
    abc
    @api 
    get detail() {
        return this.abc
    }
    set detail(data) {
        let extraColonies = data.colonies*2 //Changing the parent data 
        this.abc = {...data, colonies:extraColonies, pin:500092}
    }
}