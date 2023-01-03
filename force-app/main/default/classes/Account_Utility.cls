public class Account_Utility {
    public static void mainprocessing() {
        try {
        InsertAccount();            
        } catch (AccountException ae) {
            system.debug('what is  message   :'+ae.getmessage());
            system.debug('what is cause   :'+ae.getcause());
            system.debug('what is line numb   :'+ae.getlinenumber());
        }
    }
    public static void insertaccount() {
        try {
account a = new account();
        insert a;             
        } catch (dmlexception de) {
            throw new AccountException ('Account can not be created because required field to be filled', de);
        }
        
    }
}