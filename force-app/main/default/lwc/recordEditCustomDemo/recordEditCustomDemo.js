import { LightningElement } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account'
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
export default class RecordEditCustomDemo extends LightningElement {
    objectName = ACCOUNT_OBJECT
    inputValue = ' '
    handleChange(event) {
        this.inputValue = event.target.value }
    handleSubmit(event) {   //this method gets calledup when we type smthng in the field  
        event.preventDefault()  // This stops the page from refreshing
        const inputCmp = this.template.querySelector('lightning-input')
        const value = inputCmp.value
        if(!value.includes('India')) {
            inputCmp.setCustomValidity("The Account name must include 'India' ")
         } else {
            inputCmp.setCustomValidity("") ;
            const fields = event.detail.fields
            fields.Name = value
            // if we have extra Values, we can give here . 
            this.template.querySelector('lightning-record-edit-form').submit(fields) 
         }          inputCmp.reportValidity()
    } 
    successHandler(event) {
        const toastEvent = new ShowToastEvent({
            title:"Account Created",
            message:"Record Id" + event.detail.id,
            variant:"success"
        }) 
        this.dispatchEvent(toastEvent)
    }
    handleError(event) {
        const toastEvent = new ShowToastEvent({
            title:"Error in creating Account",
            message: event.detail.message,
            variant:"error"
        }) 
        this.dispatchEvent(toastEvent)
    }
}