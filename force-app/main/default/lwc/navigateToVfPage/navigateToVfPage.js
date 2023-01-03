import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation'
export default class NavigateToVfPage extends NavigationMixin (LightningElement) {
    handlerVfPage(){
        this[NavigationMixin.Navigate]({
            type:"standard__webPage",
            attributes: {
                url: "/apex/navigateVfPage" // This is VF component name. 
            }
        }).then(generatedUrlXyz=>{
            console.log(generatedUrlXyz)
            window.open(generatedUrlXyz)
        })
    }
}