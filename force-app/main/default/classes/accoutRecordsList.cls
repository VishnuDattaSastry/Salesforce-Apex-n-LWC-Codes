public class accoutRecordsList {
    public static void acctRecrdsList() {
        List<Account> acctRecrds = [SELECT Id, Name, (select accountId, firstname, lastname, title from contacts) from Account];
        for (Account abc: acctRecrds) 
            system.debug(abc);
    }
}