trigger abcbi on Contact (before insert) {
for (Contact Contact:Trigger.New) {
contact.description = 'contact created to test the trigger';
}
}