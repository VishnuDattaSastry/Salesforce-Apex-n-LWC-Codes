public class simple_apex_241121 {
    public static void sobjectabc (integer value) {
        integer xyz = 1;
        
        list <Account> ListNameAcct = New List <Account> ();
        while (xyz <= value) { 
        system.debug('xyz value before increase :' + xyz);
        
        account store = new account ();
        store.name='Apex TrialHead Account'+ xyz;
        store.Phone = '369852147' + xyz;
        store.AccountNumber = '1254 7896 3258' + xyz;
        ListNameAcct.add(store);
        system.debug(ListNameAcct);
        
        xyz = xyz+1;
        }
        insert ListNameAcct;
    }

}