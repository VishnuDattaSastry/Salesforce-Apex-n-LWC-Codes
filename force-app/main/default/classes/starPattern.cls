public class starPattern {
    public static void starPatternColumns(){
        for(integer row=0; row<=5; row++) {
            String pattern='';
            for (integer column=0; column<=row; column++){
                pattern = pattern + '*  ';
          }   
            system.debug(pattern);     
        }    }   }