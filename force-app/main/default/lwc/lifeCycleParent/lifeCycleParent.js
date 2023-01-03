import { LightningElement } from 'lwc';

export default class LifeCycleParent extends LightningElement {
    isChildVisible = false
    constructor() {
        super()
        console.log("Parent Constructor Called")
    }
    connectedCallback() {
        console.log(" Parent connected callback called here")
    }
    renderedCallback(){
        console.log("parent renderedCallback called here")
    }
    // name
    // changeHandler(event){
    //     this.name = event.target.value  
    // } 
    handleClick(){
        this.isChildVisible = !this.isChildVisible
    } 
    errorCallback(error, stack){
        console.log(error.message)
        console.log(stack)
    }
}