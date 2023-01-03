import { LightningElement, api } from 'lwc';
 
export default class LwcAuraCommunication extends LightningElement {
    @api title
    
    callAura() {
        const event = new CustomEvent('sendmsg', {
            detail:{
                "msg": "Ths is testing of LWC to Aura communication. "
            }
        })
        this.dispatchEvent(event)

    }
}