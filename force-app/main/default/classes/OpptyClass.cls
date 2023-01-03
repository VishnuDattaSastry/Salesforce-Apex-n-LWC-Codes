//Total amount of all Opportunities created in a day, by a user should not exceed 100K.
public class OpptyClass {
    public static void opptyMethod(List<Opportunity> ops){
        double TotalAmount = 0;
        for(Opportunity o1 : [SELECT Amount FROM Opportunity WHERE 
                     createdDate = today AND createdById = :Userinfo.getUserId()]){
				TotalAmount = TotalAmount + o1.Amount;        		                                    
        }
        for(Opportunity o2 : ops){
            TotalAmount = TotalAmount + o2.Amount;
            if(TotalAmount > 258700000){
                o2.addError('You have exceeded the daily limit of 258700,000');
            }
        }
        
    }
}