public class SoqlQueryTest {
    Public Static void queryResult() {
        List<Account> AcctList = [SELECT Name, Phone, Website FROM Account];
        for(Account acct : AcctList) {
            system.debug('Account Name is:'+acct.Name);
            system.debug(acct.Name +' Phone is: '+acct.phone);
            system.debug(acct.Name +' website is: '+acct.Website);
        }    }

    Public static void mapQuery() {
        Map<Id, Account> mapAcct = new Map<Id, Account> 
            ([SELECT Name, phone, industry FROM Account]);
        
        for(Account acctMap : mapAcct.values()) {
            system.debug('Account Name is:'+acctMap.Name);
            system.debug(acctMap.Name +' Phone is: '+acctMap.phone);
            system.debug(acctMap.Name +' website is: '+acctMap.Industry);
        }    
    }
    
    public static void relatedQuery() {
        List<Contact> ContList = [SELECT Account.Name, Account.Rating, Name, 
                              Department, Title, (SELECT CaseNumber, 
                              Subject FROM Cases) FROM Contact ORDER BY Name];
        for(Contact ContFor : ContList) {
            system.debug('Name of contact: '+ContFor.Name+', Title is: '+contFor.Title);
            system.debug(ContFor.Name+'s Account Name is: '+ContFor.Account.Name);
       
            //We need one more for loop to print parent records. 
        for(Case caseObj : ContFor.Cases) {
            system.debug('case number is: '+caseObj.CaseNumber+'case subject is: '+caseObj.Subject);
        	}
        }
    }
}