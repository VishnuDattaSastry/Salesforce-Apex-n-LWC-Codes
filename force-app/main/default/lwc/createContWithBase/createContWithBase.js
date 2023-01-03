import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent'
import ContactObject from '@salesforce/schema/Contact'
import NameField from '@salesforce/schema/Contact.Name'
import TitleField from '@salesforce/schema/Contact.Title'
import PhoneField from '@salesforce/schema/Contact.Phone'
import EmailField from '@salesforce/schema/Contact.Email'
export default class CreateContWithBase extends LightningElement {

    objectName = ContactObject;
    fields = [NameField, TitleField, PhoneField, EmailField];

    successHandler(event){
        const successCall = new ShowToastEvent({
            title: 'Successfully created a contact',
            message: 'Id of the Contact is' + event.detail.id,
            variant: 'success'
        })
        this.dispatchEvent(successCall);
    }
}