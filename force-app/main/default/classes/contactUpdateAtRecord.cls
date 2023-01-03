public with sharing class contactUpdateAtRecord {
    @AuraEnabled
    public static Contact obtainContDetails(Id contactId){
        try {
            return [Select id, FirstName, LastName, Title, AccountId FROM Contact Where Id =: contactId];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
    @AuraEnabled
    public static string contUpdate(Contact contToUpdate){
        try {
            update contToUpdate;
            return 'Success';
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
    @AuraEnabled
    public static List<Account> accountList(List<contact >acctAbc){
        try {
            return [Select Id, Name from Account];
            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}