import { LightningElement, api } from 'lwc';
import LOCALE from '@salesforce/i18n/locale'
import CURRENCY from '@salesforce/i18n/currency'
import DIR from '@salesforce/i18n/dir' //importing directions of text
export default class Internationalisation extends LightningElement {
    @api recordId
    // dirText = 'ltr' // ltr means left to right
    number= 6948563.34   //This is some random number
    formattedNumber = new Intl.NumberFormat(LOCALE, {
        style:'currency',
        currency: 'INR',    
        // Here we can give:'USD' / AUD / ETC.  If we give CURRENCY, it takes default currency. 
        currencyDisplay:'symbol'
    }).format(this.number)
}