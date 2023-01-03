public class ApexTransactionsExample {
	Public Static Void InsertLeadandAccount (String accname, string leadname, string leadcompany)
    {
        Account a = new account (name = accname);
        insert a; 
        
        Lead L1 = new lead (LastName=Leadname, Company=leadcompany);
        Insert L1;
        
        Lead L2 = new lead(Lastname=leadname, Company='Sales Force Ltd');
        Insert L2;
    }        
}