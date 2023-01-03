public with sharing class quickActionController {
    public quickActionController() {

    }
    @AuraEnabled
    public static void createAccount(String name, String phone, String parentRecordId){
        try {
            Account acc = new Account (Name=name, Phone = phone, ParentId=parentRecordId);
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}