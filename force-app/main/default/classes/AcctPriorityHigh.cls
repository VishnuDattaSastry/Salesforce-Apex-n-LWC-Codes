public class AcctPriorityHigh {
    Public Static Void whenPrrtyChange (List<Account> AcctPriority){
        List<Account> abc = [Select Id, Name FROM Account ];
        List<Contact> contList = [Select AccountId, FirstName, LastName, Department FROM Contact where AccountId IN: abc ];
        List<Contact> newCont = new List<contact>();
        List<Case> newCase = new List<Case>();

        for(Account xyz : AcctPriority){
            If (xyz.CustomerPriority__c == 'High'){
                xyz.Sic = 'abc3434';
                xyz.SLA__c = 'Gold';
                If(contList.size()>0) { 
                    contact a = new contact();
                    a.Department = 'Financial';
                    a.AccountId = xyz.id;
                    contList.add(a); 
                }
                for(integer i=0; i<=3; i++){
                Contact con = new contact();
                con.LastName = 'abc Trigger 21.10.22 last name'+i;
                con.title = 'abc title'+i;
                con.AccountId = xyz.Id;
                newCont.add(con);
                }
                for(integer i=0; i<=3; i++){
                    Case nc = new case();
                    nc.Status = 'Working';
                    nc.Origin = 'Phone';
                    nc.AccountId = xyz.Id;
                    newCase.add(nc);
                }
            } 
        }
        if(contList.size()>0){
        update contList;    
        }

        if(newCont.size()>0){
        insert newCont; 
        }
        
        if(newCase.size()>0){
        insert newCase;
        }
    }
}