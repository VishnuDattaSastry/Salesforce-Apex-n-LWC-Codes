import { LightningElement, wire } from 'lwc';
import { getObjectInfo, getPicklistValuesByRecordType } from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
export default class GetPicklistValueByRecordTypeDemo extends LightningElement {
    picklistvalue 
    @wire(getObjectInfo, {objectApiName:ACCOUNT_OBJECT}) 
    objectInfo; 

    @wire (getPicklistValuesByRecordType, {objectApiName: 'ACCOUNT_OBJECT', recordTypeId: '$objectInfo.data.defaultRecordTypeId'})
    accountPicklists({data, error}) {
        if (data) {
            console.log(data)
            this.shippingGeocodeAccuracy = data.pickListFieldValues.CurrencyIsoCode
        }
        if(error) {
            console.error(error)
        }
    }

    handleChange(event) {
        this.picklistvalue = event.detail.value 
    }
}