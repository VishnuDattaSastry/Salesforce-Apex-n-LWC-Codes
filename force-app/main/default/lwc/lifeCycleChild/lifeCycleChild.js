import { LightningElement } from 'lwc';
 
export default class LifeCycleChild extends LightningElement {
    constructor() {
        super()
        console.log("Child Constructor Called")
    }
    // interval
    connectedCallback() {
        console.log(" Child connected callback called here")
        // const interval = window.setInterval()
        throw new error ('Loading of child component failed')
    }
    renderedCallback(){
        console.log("Child renderedCallback called here")
    }
    disconnectedCallback(){
        alert('Confirmation:  Child Disconnected Callback called!!')
        // window.removeEventListener('click', this.handleClick)
        // window.clearInterval(this.interval) 
    } 
}