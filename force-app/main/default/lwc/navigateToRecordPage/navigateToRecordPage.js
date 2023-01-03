import { LightningElement } from 'lwc';
import { NavigationMixin} from 'lightning/navigation'
export default class NavigateToRecordPage extends  NavigationMixin (LightningElement) {

    handlerRecView() {
        this[NavigationMixin.Navigate] ({
            type: 'standard__recordPage',
            attributes: {
                recordId:'0035g000006dV0rAAE',
                objectApiName:'Contact',
                actionName: 'view'
            }
        })
    }
    handlerRecEdit() {
        this[NavigationMixin.Navigate] ({
            type: 'standard__recordPage',
            attributes: {
                recordId:'0035g000006dV0rAAE',
                objectApiName:'Contact',
                actionName: 'edit'
            }
        })
    }
}