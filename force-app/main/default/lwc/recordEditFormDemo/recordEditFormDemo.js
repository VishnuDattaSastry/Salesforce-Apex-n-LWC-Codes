import { LightningElement } from 'lwc';
import CONTACT_OBJECT from '@salesforce/schema/Contact'
import NAME_FIELD from '@salesforce/schema/Contact.Name'
import OTHER_PHONE_FIELD from '@salesforce/schema/Contact.OtherPhone'
import MAILING_CITY_FIELD from '@salesforce/schema/Contact.MailingCity'
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';
import ACCOUNT_FIELD from '@salesforce/schema/Contact.accountId';
export default class RecordEditFormDemo extends LightningElement {
    objectName = CONTACT_OBJECT
    fields={
        accountField:ACCOUNT_FIELD,
        nameField:NAME_FIELD,
        titleField:OTHER_PHONE_FIELD,
        phoneField:MAILING_CITY_FIELD,
        emailField:EMAIL_FIELD,
    } 
    handleReset() {  // This is to reset all fields. 
        const inputFields = this.template.querySelectorAll('lightning-input-field')
        if(inputFields) {
             Array.from(inputFields).forEach(field => {
                 field.reset()                 
             });
        }
    }
}