public class Covid19 {
    public Integer recoveredInArea = 0;
    public static Integer recoveredInCountry = 0;
	// initialization block 1
    { recoveredInArea = 5;   }

    // initialization block 2
    { recoveredInCountry = 5; }

    // static initialization block
    static {

    }
    public void treatPatient(){
        recoveredInArea++;
        recoveredInCountry++;    }
    
    public integer getTreated() {
        return recoveredInArea;
    }

    public static void printTreated(){
        System.debug('Recovered in country : '+recoveredInCountry);
    }  }