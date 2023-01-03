public class acctsListRecordPage {
	@AuraEnabled(cacheable=true)
    public static List<Account> getAcctsforRecordPageEdit(string recordId){
        return [Select Id, Name, Phone, AnnualRevenue, Industry FROM Account Where Id=: recordId Limit 5]; 
    }
}