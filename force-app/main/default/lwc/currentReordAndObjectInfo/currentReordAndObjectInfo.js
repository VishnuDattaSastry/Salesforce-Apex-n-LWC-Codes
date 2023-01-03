import { LightningElement, api } from 'lwc';
import USER_ID from '@salesforce/user/Id'
export default class CurrentReordAndObjectInfo extends LightningElement {
@api recordId;
@api objectApiName; 
@api userId = USER_ID
}