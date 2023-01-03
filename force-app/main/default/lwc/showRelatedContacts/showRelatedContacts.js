import { LightningElement, api } from 'lwc';
import RelatedContacts from '@salesforce/apex/bringRelatedObjectDocs.relatedContacts';
export default class ShowRelatedContacts extends LightningElement {
    @api recordId;
    ListContacts;
    @api abc1

    async connectedCallback(){
        this.ListContacts = await RelatedContacts({acctId : this.recordId});
        // alert('These are the related rcords:');
    }



}