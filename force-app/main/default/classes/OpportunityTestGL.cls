public class OpportunityTestGL {
    public static void updateProfile(List<Id> oppIds) {
        for(Id oppRecds: oppIds) {
           Opportunity opp = [SELECT Id, Amount, Profile__c FROM Opportunity where Id =: oppRecds];
            If(opp.amount <=10000) {
                opp.Profile__c = 'Low';
            } else if(opp.amount > 50000) {
                opp.Profile__c = 'High';
            } else {
                opp.Profile__c = 'Medium';
            } 
            update opp;
        }  
    } 
}