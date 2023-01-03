global class batchCreateRecords implements Database.Batchable<sObject> {
    	
    global Database.QueryLocator start (Database.BatchableContext bc) {
 		string query = ('Select Name from Account Limit 1');
        return Database.getQueryLocator(query);
    }
    global void execute (Database.BatchableContext bc, List<Account> scope) {
        List<Account> acctList = new List<Account>();    
        for(integer i=1001; i<=2500; i++) {
        Account acc = new Account();
            acc.Name='Test Account Name'+i;
        	acc.Phone='988554'+i; 
        	acc.Site='Hyderabad'+i;
        	acc.Industry='Electronics';
        	acc.AccountNumber='CD451756'+i;
      acctList.add(acc);  
    } 
    insert acctList; 
    }
    global void finish (Database.BatchableContext bc) {
        system.debug('Batch Job is completed.  Inserted 2500 records.');
    } }