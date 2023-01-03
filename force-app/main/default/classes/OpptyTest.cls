public class OpptyTest {
    public static void updateProfile2(List<Id> oppId) {
        List<Opportunity> opptyRecds = [SELECT Id, Amount, Discount_Percent__c, 
                                        Profile__c FROM Opportunity WHERE Id IN: oppId];
        //Above is to retrieve all oppty records along with IDs in one go. 
        for(Opportunity Opp : opptyRecds) {
            if (opp.Discount_Percent__c == null) {
                opp.Discount_Percent__c = 28;
            } else if(opp.Amount == null) {
                opp.Profile__c = '';
            } else If(opp.Amount <=10000) {
                opp.Profile__c = 'Low';
            } else if (opp.Amount > 50000) {
                opp.Profile__c = 'High';
            } else {
                opp.Profile__c = 'Medium';
            }
        }    update opptyRecds; // Keep this DML statement outside the LOOP. 
    }    }						// to avoid Governor Limit of 150 dml per transaction.