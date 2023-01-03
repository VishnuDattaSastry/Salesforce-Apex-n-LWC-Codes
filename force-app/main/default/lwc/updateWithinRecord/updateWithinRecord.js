import { LightningElement, track } from 'lwc';
import getAccounts from '@salesforce/apex/acctsListRecordPage.getAcctsforRecordPageEdit';

export default class UpdateWithinRecord extends LightningElement {
        @track accts;
        @track error;

        handleLoad() {
            getContactList()
                .then(result => {
                    this.accts = result;
                })
                .catch(error => {
                    this.error = error;
                });
        }
  }