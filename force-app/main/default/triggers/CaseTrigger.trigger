trigger CaseTrigger on Case (before insert, before update) {
	CaseTriggerHandler.updateCasePhone(Trigger.isBefore, 
             Trigger.isInsert, Trigger.isUpdate, Trigger.New);
}