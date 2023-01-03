public class abcCustomBankRecs {
    public static void bankRecords() {
        List<Bank__c> bankList = [SELECT Name, Branch_Name__c, Nationalised_Bank__c, 
			No_of_Med_Colleges_Associated__c FROM Bank__c limit 10 ];
        for (Bank__c bankBank: bankList){
            system.debug(bankBank);
        }     }   }