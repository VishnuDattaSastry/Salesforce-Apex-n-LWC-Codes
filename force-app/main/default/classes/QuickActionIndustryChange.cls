public with sharing class QuickActionIndustryChange {
@AuraEnabled 
public static Account updateIndustry(Id curntRecordId){
    try {
        Account abc = New Account();
        Account acctRecord = [Select Id, Name, Industry FROM Account Where Id =: curntRecordId ];
        if (acctRecord.Industry != 'Hospital') {
            acctRecord.Industry = 'Hospital';
        }
        update acctRecord;
        return acctRecord;
        // update acctRecord;
    } catch (Exception e) {
        throw new AuraHandledException(e.getMessage());
    }
}
}