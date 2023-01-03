import { LightningElement, track } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';

import AcctObject from '@salesforce/schema/Account';
import name from '@salesforce/schema/Account.Name';
import AnnualRevenue from '@salesforce/schema/Account.AnnualRevenue';
import BlngCity from '@salesforce/schema/Account.BillingCity';
export default class AcctTwoInputs extends LightningElement {

    objectName = AcctObject;
    allFields = [name, AnnualRevenue, BlngCity];
    @track recordId; 

    successHandler(event){
        this.recordId = event.detail.id;
        const toastEvent = new ShowToastEvent({
            title: "Contact Created",
            variant: "Success",
            message: "Contact Created Successfully"
        });
        this.dispatchEvent(toastEvent);
    }
}