public class contactTriggerHandler {
    public static Boolean isTriggerRan=false;
    public static void createDuplicateContact(List<Contact> newConsList) {
        List<Contact> duplicateConsToInsert = new List<Contact>();
        for(Contact con: newConsList) {
            Contact con1 = new Contact();
            con1.LastName = 'Duplicate Contact with Trigger';
            duplicateConsToInsert.add(con1);
        }
        INSERT duplicateConsToInsert;
    }
}