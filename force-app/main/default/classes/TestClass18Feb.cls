public with sharing class TestClass18Feb {
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContacts(){
        return [SELECT Id, FirstName, LastName FROM Contact LIMIT 8];
    }
}
// This class linked with testingwithApex.js