import { LightningElement } from 'lwc';
import hasViewAllData from '@salesforce/userPermission/ViewAllData'
export default class CheckPermissionsDemo extends LightningElement {

    get hasViewAllDataAvailable( ) {
        return hasViewAllData
    }
}