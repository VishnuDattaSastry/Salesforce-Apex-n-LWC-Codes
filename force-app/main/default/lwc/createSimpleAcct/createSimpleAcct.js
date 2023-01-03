import { LightningElement } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import Account_Object from '@salesforce/schema/Account';
import ShowToastEvent from 'lightning/platformShowToastEvent';

export default class CreateSimpleAcct extends LightningElement {
    formFields={}
    changeHandler(event){
        const{name, value} = event.target
        this.formFields[name] = value
    }
    createHandler(){
        const recordInput = {apiname: Account_Object.objectApiName, fields: this.formFields}
        createRecord(recordInput).then(result=>{
            this.showtoast('Success!!', 'contact created with ID ${result.id}')
            this.template.querySelector('form.createform').reset()
            this.formFields={}
        }).catch(error=>{
            this.showtoast('Error creating record', error.body.message )
        })
    } 

    showtoast(title, message, variant){
        this.dispatchEvent(new ShowToastEvent({
            title,
            message,
            variant: variant || 'success' 
        }))
    }
}