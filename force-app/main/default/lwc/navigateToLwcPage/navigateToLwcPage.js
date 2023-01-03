import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation'
export default class NavigateToLwcPage extends NavigationMixin (LightningElement) {
    
    handlerLwcPage(){
        var definition= {   // here "Component Name to be given 
            componentDef: 'c:internationalisation',
            attributes: {
                 recordId: '4503854383408'
                }
        }
        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes: {
                url: '/one/one.app#' + btoa(JSON.stringify(definition))
            }
        })
    }
}