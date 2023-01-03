public class dmlOperrations {
    public static void dmlInsert() {
       List<Account> acctInsert = new List<Account>();
        Account acc1 = new Account(Name='account date 01 Jun 2022');
		Account acc2 = new Account(Name='account date 02 Jun 2022');
        Account acc3 = new Account(Name='account date 03 Jun 2022');
        acctInsert.add(acc1);
        acctInsert.add(acc2);
        acctInsert.add(acc3);
        //insert acctInsert; 
        Database.Insert(acctInsert);
    }
    public static List<Account> insertAcct (List<Account> accountToInsert){
        insert accountToInsert;
        return accountToInsert;
    }
    public static List<Account> allAccounts() {
        List<Account> accts = [SELECT Name, Phone FROM Account];
        return accts;
    }
    public static void printing() {
        List<Account> printAcct = allAccounts();
        for(Account accFor : printAcct){
            system.debug(accFor.name);
        }
     }
    public static integer acctsSize(){
        List<Account> sizeOfAcct = allAccounts();
        return sizeOfAcct.size();
    }
    public static void deleAccts(){
        List<Account> allAccts = [SELECT Name FROM Account];
        List<Account> delAccts = [SELECT Name FROM Account WHERE Name Like '%4%'];
        delete delAccts;
        system.debug('Remaining No. of recrds: '+allAccts.size());
    }
    public static void updateDmlTest(){
        List<Account> acctUpdate = [SELECT Name, Phone, AnnualRevenue, Website 
                                    FROM Account WHERE Name Like '%Habtoor%'];
        for(Account acctList:acctUpdate) {
           acctList.Website='www.HLGDubai.com';
            acctList.AnnualRevenue = 937483;
            system.debug(acctList);
        }
        update acctUpdate;
    }
    public static void undeleteDml() {
        List<Account> acctUndel = [SELECT Name FROM Account 
                                   WHERE isDeleted=True AND Name Like '%12%' ALL ROWS];
        for(Account toUndel : acctUndel) {
            system.debug(toUndel.Name);
        }
        undelete acctUndel;
    }
}