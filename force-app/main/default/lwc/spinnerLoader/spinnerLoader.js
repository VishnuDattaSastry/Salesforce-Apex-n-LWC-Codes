import { LightningElement, api } from 'lwc';

export default class SpinnerLoader extends LightningElement {
    @api spinnerText=''
    @api size = "medium"
    @api variant = "brand" // base, brand & inverse are avlbl variatns
    
    get helpText() {
        return this.spinnerText ? this.spinnerText: 'Loading Spinner'
    }
}