public class createRecords20May22 {
    public static void recordCreate() { 
        List<Account> acctList = new List<Account>();
    for(integer i=1001; i<=2000; i++) {
        Account acc = new Account ();
            acc.Name='Test Account No.'+i;
        	acc.Phone='988554'+i; 
        	acc.Site='Hyderabad'+i;
        	acc.Industry='Electronics';
        	acc.AccountNumber='CD451756'+i;
        	acc.Description='This description is applicable for records from 1001 to 2000 and Current Record No:'+i;
        acctList.add(acc);
    }
        insert acctList;
     }
}