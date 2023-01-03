public class Contact_Utility {
    Public Static Void viewcontacts () {
        List <Contact> listofcontacts = [Select firstname, lastname from contact];
        for (contact con : listofcontacts) {
            string fullname = 'First Name: ' + con.firstname + ', Last Name: ' + con.lastname;
            system.debug(fullname);
        }
    }
}