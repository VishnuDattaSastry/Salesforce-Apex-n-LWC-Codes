public class listStrngList {
    public static void testingList() {
        List<String> days = new List<String>{'Monday', 
            'Tuesday', 'Wednesday', 'Thursday', 'Friday',
            'Saturday', 'Sunday' };
                
        integer noOfDays = days.size();
        system.debug('Total Number of days are: ' + noOfDays);
        for(string weekDays : days) {
            system.debug('Week days are:' + weekDays);
        }
    }
}