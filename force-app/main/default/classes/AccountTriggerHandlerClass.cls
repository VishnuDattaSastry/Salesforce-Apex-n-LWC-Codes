@isTest
public class AccountTriggerHandlerClass {
	@isTest
    private static void copyBillingAddressToShipping(){
        List<Account> acctRecs = New List<Account>();
            
        for(integer i=1; i<=10; i++){
            Account abc = new Account();
            abc.Name 				= 'Test Name'+i;
            abc.ShippingCity		= 'Test City Boduppal'+i;
            abc.NumberOfEmployees	= 556;
            abc.ShippingCountry		= 'Test City'+i;
            abc.ShippingPostalCode	= '500092'+i;
            abc.ShippingState		= 'Test shipping state'+i;
            abc.Copy_Billing_Address_to_Shipping_Address__c = true;
            acctRecs.add(abc);
        }
        test.startTest();	
        insert acctRecs;
        test.stopTest();
        
        Account updateAcct = [Select ShippingCity from Account Where Id =: acctRecs[5].Id];
        system.assertEquals(acctRecs[5].billingCity, updateAcct.ShippingCity);
        system.assertEquals(acctRecs[3].billingState, updateAcct.ShippingState);
    }
}