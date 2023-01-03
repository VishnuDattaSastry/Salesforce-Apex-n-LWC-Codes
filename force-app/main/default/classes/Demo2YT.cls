public class Demo2YT {

    public string helloworldstring;                 	// Instant Member variables 
    private static final string default_string; 	 	// Static member variables 
    
    static { 
        default_string = 'Hellow World';      			// Static initialiser block  
    }
    
    public demo2yt(){  
        this(default_string);          					//Constructor 
    } // This keyword can be used for current instance of the class. 
    
    public demo2YT (string stringtodisplay){    		//Overloaded Constructor 
        this.helloworldstring = stringtodisplay;
    }
    
    public  void printoutput() {               			// Method
        system.debug('Display text:' + helloworldstring);
    }
    
    public static  void printoutput2() {               	// Static Method
        system.debug('Display static method:');
    }
}