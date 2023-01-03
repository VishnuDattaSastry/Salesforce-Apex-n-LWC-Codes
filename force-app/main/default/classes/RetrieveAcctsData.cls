public class RetrieveAcctsData { 
    public static void AcctsDocs() { 
List<Account> accList = [select id, name, industry, (select firstname, title from contacts) from Account];
        //for (integer i=0; i<=accList.size(); i++) {
        for (Account abc: accList)  { 
        system.debug(abc.name); 
            system.debug(abc.industry); 
           // system.debug(abc.title);
       }     }   }