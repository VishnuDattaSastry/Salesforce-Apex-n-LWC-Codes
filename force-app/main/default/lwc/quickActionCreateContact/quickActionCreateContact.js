import { LightningElement } from 'lwc';
import {createRecord} from 'lightning/uiRecordApi'
import CONTACT_OBJECT from '@salesforce/schema/Contact'
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import {CloseActionScreenEvent} from 'lightning/actions';
export default class QuickActionCreateContact extends LightningElement {
    formFields={}
    changeHandler(event) {
        const {name, value} = event.target
        this.formFields[name] = value
    }
    createContactHandler() {
        const recordInput = {apiName:CONTACT_OBJECT.objectApiName, fields:this.formFields}
        createRecord (recordInput).then(result=>{
            this.showToast('Success!!', `contact created with Record ID ${result.id}`)
            this.template.querySelector('form.createForm').reset()
            this.formFields={} 
        }).catch(error=>{
            this.showToast('Error Creating record', error.body.message, 'error')
        })
    }
    closeAction() {
        this.dispatchEvent (new CloseActionScreenEvent());
    }
 
    showToast(title, message, variant){
        this.dispatchEvent(new ShowToastEvent({
            title,
            message,
            variant:variant || 'success'
        }))
    }
}