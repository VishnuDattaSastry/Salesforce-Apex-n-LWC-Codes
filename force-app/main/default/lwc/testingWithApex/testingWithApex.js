import { LightningElement, wire } from 'lwc';
import getContacts from '@salesforce/apex/TestClass18Feb.getContacts'
export default class TestingWithApex extends LightningElement {
    //Wire as a Property 
    @wire (getContacts)
    wireContacts
}