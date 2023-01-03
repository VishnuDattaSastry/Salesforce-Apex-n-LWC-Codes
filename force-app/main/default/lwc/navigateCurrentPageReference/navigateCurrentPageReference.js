import { LightningElement, wire } from 'lwc';
import { CurrentPageReference } from 'lightning/navigation'
export default class NavigateCurrentPageReference extends LightningElement {
    @wire( CurrentPageReference )
    pageRef  // this property stores the value of above wire. 

    get pageReference() {  // writing a getter to ensure the data avlblty
        return this.pageRef ? JSON.stringify(this.pageRef, null, 2): ' ';
    }

}