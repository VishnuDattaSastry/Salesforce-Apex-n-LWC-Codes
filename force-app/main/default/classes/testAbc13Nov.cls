public class testAbc13Nov {
    @AuraEnabled
    Public static void updateIndustry(Id currentIndustry){
        Account abc = new account();
        abc = [Select Id, Name, Industry from Account where Id =: currentIndustry];
        //if(abc.size()>0) {
            abc.Industry = 'Hospital';
        //}
        update abc;
    }
}