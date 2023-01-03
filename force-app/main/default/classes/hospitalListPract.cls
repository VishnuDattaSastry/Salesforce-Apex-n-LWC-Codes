public with sharing class hospitalListPract {
    @AuraEnabled
    public static List<Hospital__c> hospitalListMeth(String Type) {
        return [SELECT Name, Choose_your_Doctor__c, No_of_Doctors__c, Doctor_s_Specialisation__c FROM Hospital__c LIMIT 8 ];
    }
}