import { LightningElement } from 'lwc';

export default class ChildToParent extends LightningElement {
    showModal = false
    msg 
    clickHandler(){
        this.showModal = true
    }
    closeHandler(event){
        this.msg = event.detail 
        this.showModal = false
    }
}