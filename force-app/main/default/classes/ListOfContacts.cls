public class ListOfContacts {
    public static void ListContacts(){
        List<Contact> contList = [Select id, name, phone, Title, account.name, account.Industry from Contact];
         //for(integer i=0; i<contList.size(); i++) {
        for (Contact cc: contList) {    
            system.debug(cc);
        /*system.debug(cc.name);
            system.debug(cc.account.name);*/
        }    }   }