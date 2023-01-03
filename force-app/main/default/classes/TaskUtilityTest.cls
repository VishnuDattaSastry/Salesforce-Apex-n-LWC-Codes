@isTest
public class TaskUtilityTest 
{
	@istest static void testgettaskpriority()
    {
        String Priority = Taskutility.gettaskpriority('AU');
        system.assertEquals('Normal', Priority);
    }
    @istest static void testtaskhighpriority()
    {
        string abc = TaskUtility.gettaskpriority('US');
        system.assertEquals('High', abc);
    }
    @istest static void testfornull()
    {
        string abc = TaskUtility.gettaskpriority('SriLanka');
        system.assertEquals(Null, abc);
    }
}