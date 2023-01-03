import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import { encodeDefaultFieldValues} from 'lightning/pageReferenceUtils'
export default class NavigateObjectPageTwo extends NavigationMixin (LightningElement) {
    navigateHandler() {
        this[NavigationMixin.Navigate] ({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Contact',
                actionName: 'new'
            }
        })
    }

    navigateHandlerTwo() {
        const defaultValues = encodeDefaultFieldValues({
            FirstName: 'Indian',
            LastName: 'Soldier',
            LeadSource:'Other'
        })
        this[NavigationMixin.Navigate] ({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Contact',
                actionName: 'new'
            },
            state:{
                defaultFieldValues: defaultValues }
        })
    }

    navigateHandlerThree() {
        this[NavigationMixin.Navigate] ({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Contact',
                actionName: 'list'
            },
            state: {
                filterName: 'Recent'
            }
        })
    }

    navigateHandlerFour(){
        this[NavigationMixin.Navigate] ({
            type: 'standard__objectPage',
            attributes:{
                objectApiName: 'Account',
                actionName: 'list'
            }
        })
    }
    navigateHandlerFive(){
        this[NavigationMixin.Navigate] ({
            type: 'standard__objectPage',
            attributes:{
                objectApiName: 'Contract',
                actionName: 'list'
            }
        })
    } 
    navigateHandlerSix(){
        this[NavigationMixin.Navigate] ({
            type: 'standard__objectPage',
            attributes:{
                objectApiName: 'ContentDocument',
                actionName: 'home'
            }
        })
    }

}