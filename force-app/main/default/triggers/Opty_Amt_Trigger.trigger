trigger Opty_Amt_Trigger on Opportunity (before insert) {
	OpptyClass.opptyMethod(Trigger.New);
}