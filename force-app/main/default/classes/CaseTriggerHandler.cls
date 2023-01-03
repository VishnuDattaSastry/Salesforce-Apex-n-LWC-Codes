/* When a CASE is created or updated, its contact phone number 
must be displayed in a custom field called 'Contact Phone' on case record */
public class CaseTriggerHandler {
    Public Static Map<string, string> findContactNumber(Set<id> contactId) {

		Map<String, String> contactIdnNoMap = new Map<String, String>();
        List<Contact> contList = New List<Contact>();
        contList = [Select id, Name, Phone from Contact Where id IN : contactId ];
        for(Contact con : contList){
            contactIdnNoMap.put(con.id, con.Phone);
        }
        return contactIdnNoMap;
    }
    Public static void updateCasePhone(Boolean isBefore, 
             Boolean isInsert, Boolean isUpdate, List<Case> newCases){
        set<id> contactId = new set<Id>();
        Map<String, String> mapContainer = new Map<String, String>();
        If(isBefore == true && isInsert == true || isUpdate == true){
            for(Case C : newCases){
                contactId.add(c.ContactId);
            }
            mapContainer = findContactNumber(contactId);
            system.debug('Contact Phone No of the Case:'+mapContainer);
            for(Case c : newCases){
                c.Contact_Phone__c = mapContainer.get(c.contactId);
            }
        }
    }
}