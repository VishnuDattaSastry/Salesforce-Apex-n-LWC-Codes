@isTest
public class OpptyTriggerTestClass {
	@isTest
    private static void opptyAmountDailyLimit(){
        List<Opportunity> oppyRecs = New List<Opportunity>();
        for(integer i=0; i<=5; i++){
            Opportunity abc = new Opportunity();
            abc.Name		= 'test opportunity';
            abc.Amount		= 1254;
            abc.CloseDate	= date.newInstance(2022, 10, 25);
            abc.StageName	= 'Prospecting';
            abc.Discount_Percent__c = 15;
            oppyrecs.add(abc);
        }
        Test.startTest();
        insert oppyRecs;
        Test.stopTest();
    }
}