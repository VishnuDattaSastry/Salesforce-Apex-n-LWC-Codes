public class catmodifier {
    
    public string name;
    public integer age;
    public integer size;
    
    public void sage (integer a) {
        if (a<0 || a>31) {
            system.debug('Please enter a valid AGE of cat');
        } else {
            age = a;
        }
    }
    public void ssize (integer s) {
        if (s<5 || s>30 ) {
            system.debug('Please enter a valid size of cat');
        }
        else {
            size = s;
        }
    }
    Public void display() {
        system.debug('The cat name is' + name);
        system.debug('The cat age is' + age);
        system.debug('The cat size is' + size);
    }
    
}