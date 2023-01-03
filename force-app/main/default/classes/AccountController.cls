public with sharing class AccountController {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountList(){ 
        return [SELECT Id, Name, Type, Industry from Account LIMIT 8];
    } 

    @AuraEnabled(cacheable=true)
    public static List<Account> filterAccountTypeType(String type) {
        return [SELECT Id, Name, Type, Site from Account where Type =:type LIMIT 5];
    } 

    @AuraEnabled(cacheable=true)
    public static List<Account> findAccounts(String searchkey) {
        String key= '%' +searchkey + '%'; 
        return [SELECT Id, Name, Type, Industry from Account 
        WHERE Name LIKE :key LIMIT 5];
    } 
}