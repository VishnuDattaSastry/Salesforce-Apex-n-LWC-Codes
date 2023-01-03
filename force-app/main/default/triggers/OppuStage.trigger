trigger OppuStage on Opportunity (Before Insert) {
for (Opportunity opp : Trigger.New) {

Opportunity OldOpp = Trigger.OldMap.get(opp.id); 
Boolean OldOppiswon = OldOpp.stageName.equals('Closed Won');

Boolean NewOppisWon = opp.Stagename.equals('Closed Won');
if (!OldOppiswon && NewOppisWon) { 
    opp.Is_Value_Correct__c =true;
        }
    }
}
// Above is Old record to store in a variable. 
// Here we are checking whether old record stage field is 'closed won' or not.
// OldMap is the keyword to get the old record values.