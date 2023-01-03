public class doctorAndHospitalQuery {
    public static void doctorHospitalList(){
        List<DOCTOR__c> docMDHosp = [SELECT Id, Name, Age__c, Contact_Number__c from DOCTOR__c Limit 8];
        for (DOCTOR__c abc:docMDHosp) {
            system.debug(abc);
        }     }    }
//(SELECT Name, Consultancy__c, Hospital_Type__c from Hospital__c)