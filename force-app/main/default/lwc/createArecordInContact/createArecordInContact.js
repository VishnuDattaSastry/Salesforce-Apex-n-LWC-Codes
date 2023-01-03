import { LightningElement } from 'lwc';
import CONTACT_OBJECT from '@salesforce/schema/Contact'
import Name from '@salesforce/schema/Contact.Name'
import Phone from '@salesforce/schema/Contact.Phone'
import Email from '@salesforce/schema/Contact.Email'
import DOB from '@salesforce/schema/Contact.DOB__c'
export default class CreateArecordInContact extends LightningElement {
    nameOfObject = CONTACT_OBJECT
    feelds = [Name,Phone, Email, DOB]
}