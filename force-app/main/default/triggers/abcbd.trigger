trigger abcbd on Contact (before delete) {

for (contact a : Trigger.old) {

if (a.accountId==null) {
a.addError ('Hey!!! You are not authorised to delete this contact');
}}}