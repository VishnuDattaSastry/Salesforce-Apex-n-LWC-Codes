import { LightningElement, api, track } from 'lwc';
import getContactList from '@salesforce/apex/ContactController.getContactList';

export default class SampleDemo extends LightningElement {

    @api prop2;
    @api prop1;

    @api recordId;

    handleClick(event){
        this.prop1 = 'Vikrant';
    }

    @track contacts;
    @track error;

    handleLoad() {
        getContactList({'account': this.recordId})
            .then(result => {
                this.contacts = result;
            })
            .catch(error => {
                this.error = error;
            });
    }

}