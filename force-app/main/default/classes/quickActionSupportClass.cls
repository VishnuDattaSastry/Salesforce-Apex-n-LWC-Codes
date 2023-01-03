public with sharing class quickActionSupportClass {
    
    @AuraEnabled
    public static Account updateIndustry(Id recordId){
        try {
            Account acctRecrd = [Select Id, Name, Industry FROM Account where Id =: recordId];
            return acctRecrd;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}