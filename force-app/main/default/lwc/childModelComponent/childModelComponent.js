import { LightningElement } from 'lwc';

export default class ChildModelComponent extends LightningElement {
    okHandler(){
        const myEvent = new CustomEvent ('close', {
            detail: "Modal closed successfully"  // Here "detail" is the key word. 
            
            
        })                                      // we should not use any custom word here. 
            
        this.dispatchEvent(myEvent)
    }
}