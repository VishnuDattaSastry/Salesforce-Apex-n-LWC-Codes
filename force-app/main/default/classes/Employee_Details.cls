public class Employee_Details {

    public string name;
    public integer code;
    public string position;
    
    public void show() {
        system.debug('Employee Name is: '+name);
        system.debug('Employee Code is: '+code);
        system.debug('Employee Designation is: '+position);
    }
}