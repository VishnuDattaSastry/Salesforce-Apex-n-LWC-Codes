import { LightningElement, wire, api } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import AccountId from '@salesforce/schema/Contact.AccountId'
import Name from '@salesforce/schema/Contact.Name'
import Phone from '@salesforce/schema/Contact.Phone'
import Title from '@salesforce/schema/Contact.Title';
export default class ZzGetRecordWire extends LightningElement {
    @api recordId
    fieldsList
    @wire (getRecord, {recordId:'$recordId',fields:[ AccountId, Name, Phone, Title ]})
    ContactHandler(data, error) {
        if(data) {
            this.fieldsList = data
        }
    }
}