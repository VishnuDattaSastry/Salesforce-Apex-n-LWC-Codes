public with sharing class ContactController {
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContactList(String account) {
        return [
            SELECT Id, Name, Title, Phone, Email
            FROM Contact WHERE accountId =: account
            LIMIT 10
        ];
    }
}