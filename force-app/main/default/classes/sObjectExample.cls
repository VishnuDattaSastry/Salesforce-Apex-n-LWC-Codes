public class sObjectExample {
    public static void sobjectExample() {
	List<SObject> contacts = [SELECT FirstName, LastName, Title FROM Contact];
    for (SObject cont:contacts) {
        system.debug('Person Name'+string.valueOf(cont.get('FirstName'))
                     +' title is: '+ (string)cont.get('title'));
    	}
	}
}