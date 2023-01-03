import { LightningElement } from 'lwc';

export default class CustomLightningCard extends LightningElement {
    handleSlotFooter(){
        const footerElem = this.template.queryselector('footer')
        if (footerElem) {
            footerElem.classList.footer.remove('slds-hide')
        }
    }
}