public class AccountTriggerHandler {
    Public Static Void copyBillingToShipping(List<Account> acct) {
        for(Account acc : acct){
            if(acc.Copy_Billing_Address_to_Shipping_Address__c){
                acc.shippingcity 		= acc.BillingCity;
                acc.ShippingCountry		= acc.BillingCountry;
                acc.ShippingPostalCode	= acc.BillingPostalCode;
                acc.ShippingState		= acc.BillingState;
                acc.ShippingStreet		= acc.BillingStreet;
            }
        }
    }
}