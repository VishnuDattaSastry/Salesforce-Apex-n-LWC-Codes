import { LightningElement, api } from 'lwc';
import getData from '@salesforce/apex/AccountLWCController.getData'
import updateAccount from '@salesforce/apex/AccountLWCController.updateAccount'

export default class AccountLwc extends LightningElement {
    @api recordId
    accountRecord;
    @api prop1;
    async connectedCallback () {
        this.accountRecord = await getData({recordId : this.recordId});
    } 
    updateAccountData(event) {
        const value = event.detail.value;
        const fieldName = event.target.name;
        this.accountRecord[fieldName] = value;
    } 
    async updateAccount(event) {
        const response =  await updateAccount({acc : this.accountRecord});
        alert('Record updated successfully.');
        // eval("$A.get('e.force:refreshView').fire();"); 
        // Above can refresh only record, but not entire page.
        // Is the aobve not a recommended way of code ?  
        // window.realod()
        window.location.reload();  // this refresh entire page. 
    }
}