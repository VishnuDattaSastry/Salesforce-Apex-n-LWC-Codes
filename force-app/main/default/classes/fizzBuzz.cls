public class fizzBuzz {
    public static void fizzBuss() {
        for(integer i=0; i<=100; i++) {
            if(math.mod(i, 5)==0 && math.mod(i, 3)==0) {
                system.debug('The number is :' + 'FizzBuzz');
            } else If(math.mod(i, 3)==0) {
            system.debug('The number is: ' + 'fizz');
            } else if(math.mod(i, 5)==0) {
                system.debug('The number is :' + 'buzz'); 
            }  else {
                   system.debug('The number is: '+i);
          }  }   }  }