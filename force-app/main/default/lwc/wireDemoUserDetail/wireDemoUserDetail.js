import { LightningElement, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi'
import Id from '@salesforce/user/Id'
import NAME_FIELD from '@salesforce/schema/User.Name'
import EMAIL_FIELD from '@salesforce/schema/User.Email'
const fields = [NAME_FIELD, EMAIL_FIELD]
export default class WireDemoUserDetail extends LightningElement {
    // userId = Id    //0055g000009okuSAAQ
    userDetail
    // Wire service with Function:
    // @wire (getRecord, {recordId:'0055g000009okuSAAQ', fields:['User.Name', 'User.Email']})
    userId = Id
    @wire (getRecord, {recordId:'$userId', fields})
    userDetailHandler({data, error}) { 
        if(data) {
            this.userDetail = data.fields
        } 
        if(error) {
            console.error (error)
        }
    }
    // Wire service with Property: 
    @wire (getRecord, {recordId:'$userId', fields:['User.Name', 'User.Email']})
    userDetailProperty
    }