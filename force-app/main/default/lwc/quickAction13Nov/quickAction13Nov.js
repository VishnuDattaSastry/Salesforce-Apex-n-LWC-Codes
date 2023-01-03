import { LightningElement, api } from 'lwc';
import changeIndustryClass from '@salesforce/apex/QuickActionIndustryChange.updateIndustry';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class QuickAction13Nov extends LightningElement {
    isExecuting = false;
    updateField;

    _recordId;
    set recordId(recordId) {
            if (recordId !== this._recordId) {
        this._recordId = recordId;
            }
        }
        @api async invoke() {
        if (this.isExecuting) {
            return;
        }
        this.updateIndustryField(updt);
     }
    async updateIndustryField(){
        const updt = await changeIndustryClass({thisRecordId : this._recordId});
        alert('updated the record');
        window.location.reload();
        return updt; 
    }
    showToast() {
        const event = new ShowToastEvent({
            title: 'Updated the Industry',
            message: 'Successfully changed to Agriculture',
            variant: Success,
            mode: "dismissable"
        });
        this.dispatchEvent(event);
     }
    }