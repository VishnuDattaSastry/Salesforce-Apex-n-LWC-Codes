public class DemoApexClass {
    
    public integer defaultvalue = 10;
     
    public demoapexclass (){
        
        profile pf = [select id, name from profile where id = : userinfo.getprofileid()];
        
        if (pf.name == 'System Administrator')
            defaultvalue = 50;
    } 
    
    // class level integer can't accessed in static method 
    
    public static integer AddNumbers(integer a, integer b) {
        return a+b;    
    }
    public integer AddNumbers (integer a, integer b, integer c) {
        return defaultvalue+a+b+c;
    }
}