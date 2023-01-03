import { LightningElement, wire, api } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
export default class GetVariousFieldsDemo extends LightningElement {
    @api indFields ='Industry; NumberOfEmployees';
    @api objectApiName = 'Account';
    @api recordId;
    @api record;
    fieldsFormatted = ['Id'];

    connectedCallback() {
        this.fieldsFormatted = (this.indFields || 'Id').split(';').map(field => field);
        console.log(JSON.stringify(this.fieldsFormatted));
    }

    handleOnLoad(event) {
        const fValue = event.detail.records[this.recordId].fields.Industry.value;
        //Q1: fValue = "Education" the correct value. But "Industry" Field Name is still hard coded. 
        //How do I get the value for the field in {fld} variable?
        //Q2: How do I get fValue to render back in the HTML instead of the lightning-output-field
        //I tried this.dispatchEvent(fValue); and it had an error
    }     
}