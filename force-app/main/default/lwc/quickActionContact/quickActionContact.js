import { LightningElement, api } from 'lwc';
import {CloseActionScreenEvent} from 'lightning/actions';
import createAccount from '@salesforce/apex/quickActionController.createAccount';
export default class QuickActionContact extends LightningElement {
    @api recordId;

    name = ' ';
    phone = ' ';

    connectedCallback(){
        this.name = 'Name is SFDCPanther ';
        this.phone = '373437483'
    }

    closeAction(){
        this.dispatchEvent(new CloseActionScreenEvent());
    }
    handleSave=event=> {
        event.preventdefault();
        createAccount({
            name: this.name,
            phone: this.phone,
            parentRecordId: this.recordId
        }) 
        .then(result => {
            console.log('Result is :', result);
        })
        .catch(error => {
            console.error('Error is :', error);
        });
    }

    handleChange = event => {
        event.preventdefault();
        let name = event.target.name
        let value = event.target.value 
        if (name === 'name') {
            this.name = value;
        } else {
            this.phone = value;
        }
    }
}