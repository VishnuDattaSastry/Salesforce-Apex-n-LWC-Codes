trigger AccountSingleTrigger on Account (before insert, before update) {
    if(Trigger.isBefore && Trigger.isInsert || Trigger.isUpdate){
        AccountTriggerHandler.copyBillingToShipping(Trigger.New);
        AcctPriorityHigh.whenPrrtyChange(Trigger.New);
    }
    /*if(Trigger.isAfter && Trigger.isInsert || Trigger.isUpdate){
        
    }*/
}