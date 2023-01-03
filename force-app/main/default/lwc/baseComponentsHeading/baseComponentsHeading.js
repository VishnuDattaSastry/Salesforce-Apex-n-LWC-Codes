import { LightningElement, api } from 'lwc';
import hosp from '@salesforce/schema/Hospital__c'
import hosp_name from '@salesforce/schema/Hospital__c.Name__c'
import hosp_doctor from '@salesforce/schema/Hospital__c.Choose_your_Doctor__c'
import Dr_Specialisation from '@salesforce/schema/Hospital__c.Doctor_s_Specialisation__c'

export default class BaseComponentsHeading extends LightningElement {
    @api recordId
    objetName = hosp
    fields = [hosp_name, hosp_doctor, Dr_Specialisation]
    
}