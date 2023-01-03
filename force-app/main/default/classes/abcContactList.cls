public class abcContactList {
    public static void recordsOfContact(){ 
    List<Contact> recCont =  [SELECT Id, FirstName, LastName, Title, Phone from Contact limit 10];
    
    for (Contact xyz: recCont) { 
    	system.debug(xyz);
    }   } }