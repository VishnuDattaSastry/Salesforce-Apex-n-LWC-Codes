import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import { encodeDefaultFieldValues } from 'lightning/pageReferenceUtils'
export default class NavigateToObjectPage extends NavigationMixin(LightningElement) {
    navigateToNewRecord(){
        this[NavigationMixin.Naviagte] ({
            type: 'standard__objectPage',
            attributes:{
                objectApiName:'Contact',
                actionName:'new'
            }            
        })
    }

    navigateToNewRecordDefault(){
        const defaultValues = encodeDefaultFieldValues({
            FirstName: 'Indian',
            LastName: 'Soldier',
            LeadSource:'Other'
        })
        this[NavigationMixin.Naviagte] ({
            type: 'standard__objectPage',
            attributes:{
                objectApiName:'Contact',
                actionName:'new'
            },
            state:{
                defaultFieldValues: defaultValues
            }
            
        })
    }
}