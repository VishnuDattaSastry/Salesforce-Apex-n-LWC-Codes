import { LightningElement, api, track } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { createRecord } from 'lightning/uiRecordApi';
import CONTACT_OBJECT from '@salesforce/schema/Contact';
import NAME_FIELD from '@salesforce/schema/Contact.LastName';
import OTHERPHONE_FIELD from '@salesforce/schema/Contact.OtherPhone';
import MAILINGCITY_FIELD from '@salesforce/schema/Contact.MailingCity';
export default class CreateDynamicRecords extends LightningElement {
    @api recordId;
    @track contactFields = [{
        lastName:'',
        otherPhone:'',
        mailingCity:''
    }];
  
    addRow() {
        this.contactFields.push(JSON.parse(JSON.stringify(this.contactFields)));
    }

    deleteRow(event) {
        var rowIndex = event.currentTarget.dataset.index;
        if(this.contactFields.length > 1) {
            this.contactFields.splice(rowIndex, 1);
        } 
    }

    handleChange(event) { 
        var rowIndex = event.currentTarget.dataset.index;
        if(event.target.name === 'lastName') {
            this.contactFields[rowIndex].lastName = event.target.value;
        } else if(event.target.name === 'otherPhone') {
            this.contactFields[rowIndex].otherPhone = event.target.value;
        } else if(event.target.name === 'mailingCity') {
            this.contactFields[rowIndex].mailingCity = event.target.value;
        } 
    }


    handleSave() { 
        var emptyCheck = false; 
        for(let rowIndex in this.contactFields) { 
            if(this.contactFields[rowIndex].lastName == null ||
                this.contactFields[rowIndex].otherPhone == null ||    
                this.contactFields[rowIndex].mailingCity == null ||
                this.contactFields[rowIndex].lastName == '' ||
                this.contactFields[rowIndex].otherPhone == '' ||
                this.contactFields[rowIndex].mailingCity == '' ) { 
                emptyCheck = true;
                this.dispatchEvent(new ShowToastEvent({
                    title: 'Error',
                    message: 'Please fill all empty fields',
                    variant: 'error',
                }));
                return false;
            } else {
                console.log('pass');
            }
        }
       
        if(emptyCheck === false) {
        const fields = {}; 
        for(let rowIndex in this.contactFields) {
            fields[NAME_FIELD.fieldApiName] = this.contactFields[rowIndex].lastName;
            fields[OTHERPHONE_FIELD.fieldApiName] = this.contactFields[rowIndex].otherPhone;
            fields[MAILINGCITY_FIELD.fieldApiName] = this.contactFields[rowIndex].mailingCity;
           
            const recordInput = { apiName: CONTACT_OBJECT.objectApiName, fields};
            createRecord(recordInput)
            .then(result => {
                if(result != undefined) { 
                    this.contactFields[rowIndex].lastName = '';
                    this.contactFields[rowIndex].otherPhone = '';
                    this.contactFields[rowIndex].mailingCity = '';
                    this.dispatchEvent(new ShowToastEvent({
                        title: 'Success',
                        message: 'Contact/s created Successfully',
                        variant: 'success',
                    }));
                }
            })
            .catch(error => {
                this.dispatchEvent(new ShowToastEvent({
                    title: 'Error creating record',
                    message: error.body.message,
                    variant: 'error',
                }));
            });
          }
       }
    }
}