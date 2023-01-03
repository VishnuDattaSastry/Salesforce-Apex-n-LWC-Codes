public class Insert_Multiple_Records_231121 {
    public static void dmlmultiinsert () {
        account store1 = new account ();
        account store2 = new account ();
        
        Store1.name = 'The Factory1';
            store1.phone = '458-874';
        store1.AccountNumber = '258963';
            store2.Phone = '147-852';
        store2.AccountNumber = '321456';
        store2.name = 'The Factory2';
        
        insert store1;
        insert store2;
        
    }
    
}