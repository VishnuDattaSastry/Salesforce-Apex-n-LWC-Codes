import { LightningElement } from 'lwc';
import { NavigationMixin} from 'lightning/navigation'
export default class NavigateToRelatedRelation extends NavigationMixin (LightningElement) {
    handlerReltdRelshp() {
        this[NavigationMixin.Navigate] ({ 
            type: 'standard__recordRelationshipPage',
            attributes:{
                recordId: '0015g00000GbkJyAAJ',
                objectApiName: 'Account',
                relationshipApiName: 'Contacts',
                actionName: 'view'
            }
        })
    }
}