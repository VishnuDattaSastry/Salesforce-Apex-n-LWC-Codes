import { LightningElement } from 'lwc';

export default class SpinnerDemo extends LightningElement {
    showOne=false
    showTwo=false
    spinnerHandler(event) {
        const {name}= event.target
        this[name] = true
        let timer = window.setTimeout(()=>{
            this[name]=false
            window.clearTimeout(timer)
        }, 3000)
    }
}