import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation'
export default class NavigateAuraComponent extends NavigationMixin (LightningElement) {

    handlerAuraCompo(){
        this[ NavigationMixin.Navigate ]({
            type: 'standard__component',
            attributes: {
                componentName:"c__AuraNavigationDemo "
            },
            state:{
                "c__id":"45495605909"
            }
        })
    }
}