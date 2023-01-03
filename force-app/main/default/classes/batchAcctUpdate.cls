global class batchAcctUpdate implements Database.Batchable<sObject> {
    global Database.QueryLocator start (Database.BatchableContext bc) {
        String query = 'Select Id, Name FROM Account WHERE Name != null ';
        return Database.getQueryLocator(query);
    }
    global void execute(Database.BatchableContext bc, List<Account> scope) {
        for(Account abc:scope){
            abc.Rating='Hot';
            abc.Fax='Fax No:5454587';
        } 
        update scope;
    }
    global void finish(Database.BatchableContext bc) {
        system.debug('updated all records that Name contains 1 ');
    }
}