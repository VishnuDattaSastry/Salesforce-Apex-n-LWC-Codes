public class Lead_New_Button {
    public Lead newLead {set; get;} 
    public Lead_New_Button(Apexpages.StandardController controller) {
        newLead=(Lead)controller.getRecord();
    } 
    public pageReference create(){
        pageReference p;
        //Check for the duplicate in the Lead object
        Integer count=[Select count() from lead WHERE company=:newLead.Company or lastName=:newLead.LastName];
        // If duplicate lead found, throw an error.
        If(count>0){
            Apexpages.Message msg = new Apexpages.Message(Apexpages.Severity.WARNING, 'Duplicate Lead found');
            Apexpages.addMessage(msg); 
        } else {  // if duplicate not found, check for Accounts with same account name
            List <Account> accounts = [Select Id from Account where name=:newLead.Company];
            if(accounts.size()>0){ 
                contact con = new contact();
                con.LastName = newLead.LastName; 
                con.FirstName = newLead.FirstName;
                con.Phone = newLead.Phone;
                con.Email = newLead.Email;
                con.AccountId = accounts[0].Id;
                insert con;
                p=new PageReference('/'+accounts[0].Id); // Goes to duplicate account page.  
                //
                //Apexpages.Message msg = new Apexpages.Message(Apexpages.Severity.WARNING, 'Company already exists in the Data');
            //Apexpages.addMessage(msg);
            } else { 
            	//If there are no duplicate Accounts & Leads, check Contacts for duplicate. 
            	List <contact> contacts = [Select Id from Contact where lastName=:newLead.LastName and email=:newLead.Email];
                if(contacts.size()>0) {
                    Account acc = new Account();
                    acc.Name = newLead.Company;
                    acc.Industry = newLead.Industry;
                    insert acc;
                    contacts[0].AccountId=acc.Id;
                    update contacts;
                     p=new PageReference('/'+acc.Id); 
                } else {
                    Insert newLead;
                    p = new PageReference('/'+newLead.Id);
                }
            }
        }
        return p;
    } 
}