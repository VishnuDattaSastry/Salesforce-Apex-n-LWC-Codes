import { LightningElement, api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { CloseActionScreenEvent } from 'lightning/actions';
import AccountObject from '@salesforce/schema/Account';
export default class QuickUpdateIndustry extends LightningElement {
    @api recordId;
    objectApiName = AccountObject;
}