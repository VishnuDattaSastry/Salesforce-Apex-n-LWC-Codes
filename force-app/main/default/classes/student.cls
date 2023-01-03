public class student {
    
    Public string name;
    Public integer age;
    
    Public student (string n, integer a) {  // constructor#1.
        name = n;
        age = a;
    }

    Public student() {
        Name='Balraj';
        Age = 9;
    }
    
    Public void display() {   
        system.debug('Student name is ' + name);
        system.debug('Student age is ' + age);
    }
    
}