trigger abcbu on Contact (before update) {

for (contact xyz : Trigger.New) {

xyz.description='Auto generated description with Triggers -  Updated by' + Userinfo.getusername();

}
}