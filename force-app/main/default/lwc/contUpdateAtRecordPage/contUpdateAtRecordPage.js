import { LightningElement, api } from 'lwc';
import obtainContDetails from '@salesforce/apex/contactUpdateAtRecord.obtainContDetails';
import contUpdate from '@salesforce/apex/contactUpdateAtRecord.contUpdate';
import accountList from '@salesforce/apex/contactUpdateAtRecord.accountList';
export default class ContUpdateAtRecordPage extends LightningElement {
    @api recordId;
    contactRecord;
    accountRecords = {};
    @api contactProperty;

    async connectedCallback(){
        this.contactRecord = await obtainContDetails({contactId : this.recordId});
        this.accountRecords = accountList({});
    }
    updateContactRecord(event){
        const inputValue = event.detail.value;
        const inputField = event.target.name;
        this.contactRecord[inputField] = inputValue;
    }
    // async bringAcctList(){
    //     const acctAllRecds = await acctUpdate({accountList: this.accountRecords})
    // }

    async updateContRecord(event){
        const response = await contUpdate({contToUpdate: this.contactRecord});
        this.accountRecords = accountList({});
        alert('Contact Successfully Updated with LWC');
        window.location.reload(); 
    }
}