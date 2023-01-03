public class TaskUtility 
{
	Public static string gettaskpriority (string leadcountry)
    {
        if (string.isBlank(leadcountry) || leadcountry.length()>2) 
        {
            return null;
        }
        string taskpriority;
        if (leadcountry=='US')
        {
            taskpriority = 'High';
        } 
        else   
        {
            taskpriority = 'Normal';
        }
        return taskpriority;
    }
    
}