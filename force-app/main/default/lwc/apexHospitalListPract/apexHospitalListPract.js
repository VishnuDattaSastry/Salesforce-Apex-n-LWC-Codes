import { LightningElement } from 'lwc';
import hospitalListMeth from '@salesforce/apex/hospitalListPract.hospitalListMeth';
export default class ApexHospitalListPract extends LightningElement {
    hospList 
    isClear = false
    handleClick(){ 
        hospitalListMeth().then(result=>{
            console.log(result)
            this.hospList = result
            this.isClear = true
        }).catch(error=>{
            console.error(error)
        })
    }
    handleClear(){
        this.hospList=null
        this.isClear = false
    }
}