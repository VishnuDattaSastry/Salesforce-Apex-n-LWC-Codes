import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation'
export default class NavigateToExternalWebPage extends NavigationMixin (LightningElement) {
    handlerWebPage(){
        this[NavigationMixin.Navigate] ({
            type: "standard__webPage",
            attributes: {
                url:"https://timesofindia.indiatimes.com/"
            } 
        })
    }
}