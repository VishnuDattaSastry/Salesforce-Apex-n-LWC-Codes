public class fibonacciSeries {
    public static void fibonacciCode(){
        integer current;
        integer previous = 1;
        integer bfrPrevious = 0;
        //for(current=bfrPrevious; current<=225; current=(previous+bfrPrevious)) {
        for (integer i=0; i<20; i++) { 
            current = bfrPrevious; 
            system.debug('Fibonacci Series is: '+ current); 
            current = previous + bfrPrevious;
            bfrPrevious = previous;
            previous = current;
        }    }   } 
     
        /*
        //Below is done with While Loop:
        integer current;
        integer previous = 1;
        integer bfrPrevious = 0;
        integer i = 0;
        while (i<=18) {
            current = previous+bfrPrevious;
            system.debug('Fibonacci No. series is: '+current);
            bfrPrevious = previous;
            previous = current;
            i++;
        }   }    } */