@Restresource(urlMapping='/accounts/*')

global with sharing class  CaseManager22 {
@httpGet
    global static case getcasebyid() {
        RestRequest request = RestContext.request;
        string caseid= request.requestURI.substring (request.requestURI.lastindexof('/')+1);
        case result = [Select caseNumber, Subject, Status, origin, Priority from case where id =:CaseId];
        				// All the above are different fields from the Object 'Field'.
        return result;
    }

}