trigger ContactTrigger on Contact (before insert) {
    If(Trigger.isAfter && Trigger.isInsert && contactTriggerHandler.isTriggerRan) {
        contactTriggerHandler.isTriggerRan = true;
        contactTriggerHandler.createDuplicateContact(Trigger.new);
    }
}