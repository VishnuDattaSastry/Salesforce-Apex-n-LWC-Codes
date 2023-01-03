import { LightningElement } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import CONTACT_OBJECT from '@salesforce/schema/Contact'
import NAME_FIELD from '@salesforce/schema/Contact.LastName'
import OTHER_PHONE_FIELD from '@salesforce/schema/Contact.OtherPhone'
import MAILING_ADDRESS_FIELD from '@salesforce/schema/Contact.MailingCity'

export default class FirstAssignmentByVikrant extends LightningElement {
    objectName = CONTACT_OBJECT
    fieldstoCreate = [NAME_FIELD, OTHER_PHONE_FIELD, MAILING_ADDRESS_FIELD]

    successHandler (event) {
        console.log(event.detail.id)
        const toastEvent = new ShowToastEvent({
            title: "Account Created",
            message: "Record ID is:"+ event.detail.id,
            varient: "Successfully Created a Record"
        })
        this.dispatchEvent(toastEvent)
    }
    errorHandler (event) {
        const toastEvent = new ShowToastEvent({
            title: "Error",
            message: "Other Phone & Mailing City are mandatory",
            varient: Error
        })
        this.dispatchEvent(toastEvent)
    }
    createAnother() {
        const recordInput = this.template.querySelector('form.abc').reset()
        fieldstoCreate={}
    }
}