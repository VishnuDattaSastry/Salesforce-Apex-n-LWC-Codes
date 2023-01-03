/* Lets say, Project_No__c is the common field in objects of Account, Lead and Bank__c.   
 These three Objectsare no-way related to each other.   
When we change a common field in the Lead object, remaining two i.e. 
Account & Bank__c same fields must be changed, though they are not related each other.  */
trigger ProjectNoChange on Lead (before update) {
	Set<string> leadSet = New Set<string>();
    Map<string, string> pnOldNew = new map<string, string>(); 
    
    for(Lead lead1 : Trigger.New){
        if(lead1.Project_No__c != Trigger.oldMap.get(lead1.id).Project_No__c){
            leadSet.add(lead1.Project_No__c);
            pnOldNew.put(Trigger.oldMap.get(lead1.id).Project_No__c, lead1.Project_No__c);
        }
        if(leadSet.size() > 0) {
        List<Account> acc1 = [SELECT Project_No__c FROM Account WHERE Project_No__c IN: leadSet];
        for(Account ac : acc1){
            if(pnOldNew.containsKey(ac.Project_No__c)){
                ac.Project_No__c = pnOldNew.get(ac.Project_No__c);
            }        }
        update acc1;
		        
        List<Bank__c> bank1 = [SELECT Project_No__c FROM Bank__c WHERE Project_No__c IN: leadSet];
        for(Bank__c bnk : bank1) {
            if(pnOldNew.containsKey(bnk.Project_No__c)){
                bnk.Project_No__c = pnOldNew.get(bnk.Project_No__c);
            }
   		update bank1;
        }}
    }
}