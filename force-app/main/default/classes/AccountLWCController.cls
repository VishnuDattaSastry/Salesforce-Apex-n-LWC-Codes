/**
 * @description       : 
 * @author            : Vikrant Kumar
 * @group             : 
 * @last modified on  : 11-09-2022
 * @last modified by  : Vikrant Kumar
**/
public with sharing class AccountLWCController { 
    
    @AuraEnabled
    public static ACCOUNT getData(Id recordId) {
            return [SELECT Id, Name, Industry FROM ACCOUNT WHERE Id =:recordId];
    }
    @AuraEnabled
    public static string updateAccount(Account acc){
          update acc;  
          return 'Success';
    } 
}