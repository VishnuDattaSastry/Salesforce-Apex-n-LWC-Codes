import { LightningElement } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import LEAD_OBJECT from '@salesforce/schema/Lead'
import Name from '@salesforce/schema/Lead.Name'
import City from '@salesforce/schema/Lead.City'
import Company from '@salesforce/schema/Lead.Company'
import Email from '@salesforce/schema/Lead.Email'
import Phone from '@salesforce/schema/Lead.Phone'
export default class RecordFormLead extends LightningElement {
    objectName= LEAD_OBJECT
    fields = [Name, City, Company, Email, Phone]

    successMessage(event) {
        const tostMsg = new ShowToastEvent({
            title:"Done",
            message:"Lead created successfully",
            variant: "success"
        })
        this.dispatchEvent(tostMsg)
    }
    resetHandler() {
        const clickToReset = this.template.querySelectorAll(lightning-record-form)
        if(clickToReset) {
            Arrayy.from(clickToReset).forEach(element => {
                element.reset()
            });
        }
        
    }
}