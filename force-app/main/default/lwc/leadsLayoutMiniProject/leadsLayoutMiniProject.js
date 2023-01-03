import { LightningElement } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import {CloseActionScreenEvent} from 'lightning/actions';
// import createLead from '@salesforce/apex/quickActionController.createLead';
import LEAD_OBJECT from '@salesforce/schema/Lead'
import Name_Field from '@salesforce/schema/Lead.Name';
import Company_Field from '@salesforce/schema/Lead.Company';
import Industy_Field from '@salesforce/schema/Lead.Industry';
import Category_Field from '@salesforce/schema/Lead.Category__c';
import LeadSource_Field from '@salesforce/schema/Lead.LeadSource';
import DOB_Field from '@salesforce/schema/Lead.DOB__c';
import MarriageAnniversary_Field from '@salesforce/schema/Lead.Marriage_Anniversary__c';
import Phone_Field from '@salesforce/schema/Lead.Phone';
import City_Field from '@salesforce/schema/Lead.City__c';
import RecdSMS_Field from '@salesforce/schema/Lead.Receive_SMS__c';
import RecdEmail_Field from '@salesforce/schema/Lead.Receive_Email__c';
import Email_Field from '@salesforce/schema/Lead.Email';
import Address_Field from '@salesforce/schema/Lead.Address';
export default class LeadsLayoutMiniProject extends LightningElement {
    objectName = LEAD_OBJECT 
    abc 
    basicInfo = { Name_Field, Company_Field, Industy_Field, Category_Field, LeadSource_Field }
    otherInfo = { DOB_Field, MarriageAnniversary_Field, Phone_Field, City_Field, 
        RecdSMS_Field, RecdEmail_Field, Email_Field, Address_Field } 

        handleReset(event){ 
            const inputFields = this.template.querySelectorAll('lightning-input-field')
            if(inputFields) {
                Array.from(inputFields).forEach(field => {
                    field.reset()
                })
            }
        }

        closeAction(){
            this.dispatchEvent(new CloseActionScreenEvent());
        }
       
    successHandler(event){ 
        this.closeAction()
        const abc = new ShowToastEvent({
            title:"Success",
            message: "Successfully Creatd the Lead",
            variant: "success"
        });
        this.dispatchEvent(abc);
    }
}