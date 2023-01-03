import { LightningElement } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent'
export default class ToastNotifications extends LightningElement {

    toastHandler(){
        this.showToast('Successfully Processed', 'Account Created', 'success', 'dismissable')
    }
    toastHandlerTwo(){   
            this.showToast('Oops! Something Went Wrong', '{0} Account Not Created {1}', 'error', 'sticky')
    }
    toastHandlerThree(){
        this.showToast('Please Note This:', 'Password must be 15 characters', 'info', 'pester')
    }

    toastHandlerFour(){
        this.showToast('Warning:', 'Learn LWC thoroughly', 'warning', 'sticky')
    }
    // Common Method to reduce the code. 
    showToast(title, message, variant, mode) {
        const abc = new ShowToastEvent({
            title, message, variant, mode, messageData:[ // messageData can be a string or object
            'Salesforce', {url:'https://www.lightningdesignsystem.com/', label:'Click Here for SLDS'}
            ]
        })
        this.dispatchEvent(abc)
    }
}