import { LightningElement, wire } from 'lwc';
import getAccountList from '@salesforce/apex/AccountController.getAccountList'
// In the above syntax, we didnt mention Name Space, as we dont have. 
export default class ApexWireDemo extends LightningElement {
    accountList
    @wire(getAccountList)
    accounts 

    @wire(getAccountList)
    accountsHandler ({data, error}) {
        if(data) {
            this.accountList = data.map(item=>{ 
                let newType =  item.Type === 'Customer - Channel' ? 'Channel':
                            item.Type === 'Customer - Direct' ? 'Direct': 'General Business'
                let newIndustry = item.Industry === 'Construction' ? 'Construction of Infrastructure':
                            item.Industry === 'Apparel' ? 'Clothing Industry': 'Other Industry'
                            return {...item, newType, newIndustry} 
            })
        }
        if(error) {
            console.error(error)
        }
    } 

    }