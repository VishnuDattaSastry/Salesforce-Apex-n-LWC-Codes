import { LightningElement, api } from 'lwc';
import { updateRecord } from 'lightning/uiRecordApi';
import STAGENAME_FIELD from '@salesforce/schema/Opportunity.StageName'
import ID_FIELD from '@salesforce/schema/Opportunity.Id'
import {ShowToastEvent} from 'lightning/platformShowToastEvent'; 
export default class ClosedOpportunityAction extends LightningElement {
    @api recordId
    @api invoke() {
        const fields = {}
        fields [ID_FIELD.fieldApiName] = this.recordId
        fields [STAGENAME_FIELD.fieldApiName] = 'Closed'
        const recordInput = {fields}
        updateRecord(recordInput)
        .then(()=>{
            this.showToast("Action Success", "Opportunity Closed Successfully", "success")
        }).catch(error=>{
            this.showToast("Error Message", error.message, "error")
        })
    }
    showToast(title, message, variant){
        this.dispatchEvent(new ShowToastEvent({
            title, message, variant
        }))
    }
}