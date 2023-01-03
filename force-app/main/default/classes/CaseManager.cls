@Restresource(urlMapping='/cases/*')

global with sharing class  CaseManager {
@httpget
    global static case getcasebyid() {
        RestRequest request = RestContext.request;
        string caseid= request.requestURI.substring (request.requestURI.lastindexof('/')+1);
        case result = [Select caseNumber, Subject, Status, origin, Priority from case where id =:CaseId];
        				// All the above are different fields from the Object 'Field'.
        return result;
    }
    
    @HttpPost  // This is Annotation for creating record
    global static id createcase (string subj, string sta, string org, string pri)
    {
        case thiscase = New case (Subject=subj, status=sta, origin=org, priority=pri);
        insert thiscase;
        return thiscase.id;
    }
    /* Go to workbench, select Post and give values as below: 
         /services/apexrest/cases
{
"subj"   : "Next Sighting",
"sta"    : "New",
"org"    : "Phone",
"pri"    : "Low"
} 
	finally, hit the execute button. 
*/
    @Httpdelete  // For delete we have to provide ID of the record. 
    global static void deletecase()
    {
        RestRequest request = RestContext.request;
        string caseid= request.requestURI.substring (request.requestURI.lastindexof('/')+1);
        case thiscase = [select id from case where id =: caseid];
        delete thiscase;
    }
    // goto to Workbench and give URL with record id to delete. 
    // ex: /services/apexrest/cases/5005g00000CAzlA

 
	@HttpPut	 // This is for Upsert operation
		global static id upsertcase (string sub, string sta, string ori, string pri, string id)
			// Here if the id is there, it is update operation, else, it is an insert.
		{
    	case thiscase = new case(id=id, subject=sub, status=sta, origin=ori, priority=pri);
        Upsert thiscase;
        return thiscase.id;
		}
    // In Workbench, select PUT and give data.  if we give ID, it updates, else, it creates. 
   
    @HttpPatch    // It typically used to update fields in existing records. 
    
    global static ID updatecasefields()
        
    {
        RestRequest request = RestContext.request;
        string caseid= request.requestURI.substring (request.requestURI.lastindexof('/')+1);
        case thiscase = [select id from case where id=:caseid];
        map <string, object> params = (map <string, object>) JSON.deserializeUntyped(request.requestBody.tostring());
        for (string fieldname:params.keySet())
        {
            thiscase.put(fieldname, params.get(fieldname));
        }
        Update thiscase;
        return thiscase.id;
    }
            
}