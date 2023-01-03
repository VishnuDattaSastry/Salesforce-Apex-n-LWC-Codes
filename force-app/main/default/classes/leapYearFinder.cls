public class leapYearFinder {
    public static void leapYear(){
        integer year = 1100;
        system.debug('Loop years between Year 1100 to 2050');
        do{
            if(math.mod(year, 4)==0) {
                if(math.mod(year, 100)==0) {
                    if(math.mod(year, 400)==0) {
                        system.debug('The Year '+year+' is a leap year');
                    }
                } else { 
                        system.debug(year + ' is a leap year');  
                }
            } year++;
        } while(year<=2050);
            system.debug('year value after the loop is : '+year);
        
    }  }