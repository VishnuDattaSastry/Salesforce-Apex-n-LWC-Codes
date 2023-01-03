public class TemperatureConverter 
{
	Public Static decimal Fahrenheittocelsius(decimal fh)
    {
        decimal cs=(fh-32)*5/9; 
        // This is Scientific formula to convert fahrenheit to celsius: if fh=100: (100-32)*5/9 = 37.7778.
        // Below is the manual test
        system.debug('Conversion of Fahrenheit to Celsuit' + cs.setScale(2)); 
        
        return cs.setscale(2);
    }
}