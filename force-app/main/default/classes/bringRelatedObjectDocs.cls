public with sharing class bringRelatedObjectDocs {

    @AuraEnabled(cacheable=true)
    public static List<Contact> relatedContacts(String acctId){
        try {
            List<Contact> getContacts = [SELECT Id, FirstName, LastName, Title, AccountId FROM Contact where AccountId=: acctId];
            return getContacts;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
    public bringRelatedObjectDocs() {

    }
}