import { LightningElement } from 'lwc';
import MOMENT from '@salesforce/resourceUrl/moment'
import ANIMATE from '@salesforce/resourceUrl/animate'
import {loadScript, loadStyle} from 'lightning/platformResourceLoader'
// Importing of this loadscript is necessary to load the JS files like moment
export default class ThirdPartyFiles extends LightningElement {
    currentDate=''
    isLibLoaded = false
    renderedCallback(){
        if(this.isLibLoaded){
            return
        } else {
            promise.all([
                loadStyle (this, ANIMATE+'/moment/animate.min.css'),
                loadScript(this, MOMENT+'/moment/moment.min.js')
            ]).then(()=>{
                this.setDateOnScreen() 
            })
                this.isLibLoaded=true 
        }
     }
    setDateOnScreen() {
        this.currentDate=MOMENT().format('LLLL')
    }
}